import { defineConfig } from "drizzle-kit";
var stdin_default = defineConfig({
  out: "./drizzle",
  schema: "./db/schema.js",
  dialect: "sqlite"
});
export {
  stdin_default as default
};
