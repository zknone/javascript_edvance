import css from "rollup-plugin-import-css";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "src/app.js",
    output: { file: "dist/bundle.js", format: "esm" },
    plugins: [ css({output: 'bundle.css'}), nodeResolve() ]
};
