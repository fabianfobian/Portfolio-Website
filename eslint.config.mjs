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

  {
    rules: {
      // Disable the unescaped entities rule for React
      "react/no-unescaped-entities": "off",
      
      // Allow unused variables if they start with underscore
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      
      // Disable other common strict rules that might cause issues
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // React specific rules
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "off",
      
      // General JavaScript rules
      "no-console": "warn",
      "no-debugger": "warn",
      "prefer-const": "error",
      "no-var": "error",
      
      // Import rules
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/default": "off",
      "import/no-anonymous-default-export": "off"
    }
  }
  ];

export default eslintConfig;
