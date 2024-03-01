import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { obfuscator } from "rollup-obfuscator";

export default {
	input: "src.js",
	output: [
		{
			file: "index.js",
			format: "cjs",
			inlineDynamicImports: true
		}
	],

	plugins: [commonjs(), nodeResolve(), json(), obfuscator()]
};
