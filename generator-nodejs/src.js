const generateSchema = require("./schemaGenerator");
const swaggerTemplate = require("./swaggerTemplate");
const fs = require("fs");

var Mixpanel = require("mixpanel");
var mixpanel = Mixpanel.init("f33b80a16f963e03c771000a4477972a");

var jsonData = {
	openapi: "3.0.0",
	info: {
		title: "Example API",
		version: "1.0.0"
	},
	servers: [],
	paths: {}
};

var FUNC_REGISTERED = false;

function GranthAi({ docTitle, baseUrl, key }) {
	if (!baseUrl || baseUrl.length < 5) {
		console.error("[GranthAi] Server baseUrl key not provided!...");
	}

	jsonData.info.title = docTitle || "API Documentation";
	if (baseUrl && baseUrl.length > 0) {
		jsonData.servers.push({ url: baseUrl, description: `${docTitle} server` });
	}

	if (!FUNC_REGISTERED) {
		console.log("[GranthAi] Please help us improve the service by signing up here - https://granthai.vercel.app/");
		FUNC_REGISTERED = true;
	}

	return async function (req, res, next) {
		const send = res.json;
		let firstpass = false;

		if (req.path.includes("/api-docs")) {
			return res.send(swaggerTemplate(jsonData));
		}

		mixpanel.track("granthai-node-middleware", {
			distinct_id: baseUrl || req.get("host"),
			route: req.originalUrl
		});

		res.json = function (body) {
			if (!firstpass) {
				firstpass = true;
				const status = res.statusCode;
				const paramsLength = Object.keys(req.params).length;
				let path = req.originalUrl.split("?")[0];

				if (paramsLength > 0) {
					path = path.split("/");
					const params = req.params;
					for (let i = 0; i < path.length; i++) {
						for (const obj in params) {
							if (path[i] === params[obj]) {
								path[i] = "{" + obj + "}";
							}
						}
					}
					path = path.join("/");
				}

				if (!jsonData.paths[path]) {
					jsonData.paths[path] = {};
				}
				const method = req.method.toLowerCase();
				if (!jsonData.paths[path][method]) {
					if (method === "get" || method === "delete") {
						jsonData.paths[path][method] = {
							summary: "",
							parameters: [],
							responses: {}
						};
					}
					if (method === "post" || method === "put" || method === "patch") {
						jsonData.paths[path][method] = {
							summary: "",
							parameters: [],
							requestBody: { content: {} },
							responses: {}
						};
					}
				}
				if (req.params) {
					const params = req.params;
					for (const obj in params) {
						const p = {
							name: obj,
							in: "path",
							required: true,
							schema: {
								type: "string"
							}
						};

						let found = false;
						for (const a of jsonData.paths[path][method].parameters) {
							if (a.name === p.name && a.in === "path") {
								found = true;
							}
						}
						if (!found) {
							jsonData.paths[path][method].parameters.push(p);
						}
					}
				}
				if (req.query) {
					const params = req.query;
					for (const obj in params) {
						const p = {
							name: obj,
							in: "query",
							schema: {
								type: "string"
							},
							description: ""
						};
						if (typeof parseInt(params[obj]) === "number") {
							p.schema.type = "integer";
						}
						let found = false;
						for (const a of jsonData.paths[path][method].parameters) {
							if (a.name === p.name && a.in === "query") {
								found = true;
							}
						}
						if (!found) {
							jsonData.paths[path][method].parameters.push(p);
						}
					}
				}

				const reqContentType = req.headers["content-type"];
				const data = req.body;

				if (method === "post" || method === "put" || method === "patch") {
					jsonData.paths[path][method].requestBody.content[reqContentType] = {
						schema: generateSchema(data)
					}; //add schema instead of data later
					//handle case for true
					jsonData.paths[path][method].requestBody["required"] = false;
				}

				if (!jsonData.paths[path][method].responses[status]) {
					jsonData.paths[path][method].responses[status] = {
						description: "",
						content: {}
					};
				}
				let resContentType;
				if (typeof body === "object") {
					resContentType = "application/json";
					jsonData.paths[path][method].responses[status].content[resContentType] = {
						schema: generateSchema(body)
					};
				} else if (typeof body === "string") {
					resContentType = "text/plain";
					jsonData.paths[path][method].responses[status].content[resContentType] = {
						schema: { type: "string" }
					};
				} else {
					resContentType = "string";
					jsonData.paths[path][method].responses[status].content[resContentType] = {
						schema: { type: "string" }
					};
				}

				fs.writeFile("./openapi.json", JSON.stringify(jsonData), (err) => {
					//console.log("Written data");
				});
			}
			send.call(this, body);
		};
		next();
	};
}

module.exports = GranthAi;
