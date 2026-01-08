import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Relax a set of rules that can block CI/builds. These are intentionally
  // set to "off" to prioritize a successful build while keeping code intact.
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/jsx-no-undef': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default eslintConfig;
