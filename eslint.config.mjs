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
      // Reglas de formato y estilo
      "indent": ["error", 2], // Indentación de 2 espacios
      "quotes": ["error", "single"], // Usar comillas simples
      "semi": ["error", "always"], // Punto y coma obligatorio
      "comma-dangle": ["error", "always-multiline"], // Coma al final en objetos y arrays multilínea
      "object-curly-spacing": ["error", "always"], // Espacios dentro de llaves
      "array-bracket-spacing": ["error", "never"], // Sin espacios dentro de corchetes
      "space-before-function-paren": ["error", "never"], // Sin espacio antes de los paréntesis de funciones
      "keyword-spacing": ["error", { "before": true, "after": true }], // Espacios alrededor de palabras clave
      "no-multi-spaces": "error", // Evitar múltiples espacios
      "no-trailing-spaces": "error", // Evitar espacios al final de las líneas
      "eol-last": ["error", "always"], // Nueva línea al final del archivo
      "no-console": "warn", // Evitar el uso de console.log
    },
  },
];

export default eslintConfig;
