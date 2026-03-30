import { createRequire } from "module";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import nextPlugin from "@next/eslint-plugin-next";

const require = createRequire(import.meta.url);
const babelParser = require("next/dist/compiled/babel/eslint-parser");

const nextBabelParser = {
  meta: { name: "next/babel-eslint-parser" },
  parseForESLint: babelParser.parseForESLint,
};

export default defineConfig([
  {
    name: "adam/javascript",
    files: ["**/*.{js,jsx,mjs}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: nextBabelParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        allowImportExportEverywhere: true,
        babelOptions: {
          presets: ["next/babel"],
          caller: { supportsTopLevelAwait: true },
        },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".mjs"],
        },
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...reactHooks.configs.flat.recommended.rules,
      ...importPlugin.flatConfigs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "import/no-anonymous-default-export": "warn",
      "react/no-unknown-property": "off",
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      "jsx-a11y/alt-text": [
        "warn",
        { elements: ["img"], img: ["Image"] },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**"]),
]);
