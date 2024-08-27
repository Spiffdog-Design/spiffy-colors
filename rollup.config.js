// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import scss from "rollup-plugin-scss";

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      file: './dist/index.mjs',
      format: 'es',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    scss({
      output: "./dist/css/style.css",
      failOnError: true,
      runtime: require("sass"),
    }),
  ],
}
