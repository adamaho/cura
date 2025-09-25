export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^svelte", // svelte imports
    "<THIRD_PARTY_MODULES>",
    "^~/", // path alias 
    "^[./](?!.*\\.css$)", // relative imports excluding css 
    ".*\\.css$", // css imports 
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: ["*.ts"],
      options: {
        parser: "babel-ts",
      },
    },
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.css"],
      options: {
        printWidth: 1000,
      },
    },
  ],
};
