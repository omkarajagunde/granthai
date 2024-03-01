// const data = require('./example-api copy.json')
// const schema = {}
// console.log(data)

// console.log(Array.isArray(data.paths['/users'].get.parameters))
function generateSchema(data) {
	const sch = {};

	let type = typeof data;
	if (Array.isArray(data)) {
		type = "array";
	}
	sch.type = type;
	if (type === "object") {
		data = JSON.parse(JSON.stringify(data));
		sch.properties = {};
		for (const obj in data) {
			let type = typeof data[obj];
			if (Array.isArray(data[obj])) {
				type = "array";
			}
			let tempSchema = {};
			if (type === "object") {
				tempSchema = generateSchema(data[obj]);
				sch["properties"][obj] = tempSchema;
			} else if (type === "array") {
				tempSchema = generateSchema(data[obj][0]);
				sch["properties"][obj] = { type: type, items: tempSchema };
			} else {
				sch["properties"][obj] = { type: type };
			}
		}
	} else if (type === "array") {
		sch.items = generateSchema(data[0]);
	}
	return sch;
}

// const schema = generateSchema(data)
// // console.log(JSON.stringify(schema))
// const fs = require('fs');
// fs.writeFile('./generatedSchema.json',JSON.stringify(schema), ()=>{})
module.exports = generateSchema;
