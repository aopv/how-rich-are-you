import { cpSync, mkdirSync, rmSync } from "node:fs";

const output = new URL("./dist/", import.meta.url);
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const path of ["app.js", "assets", "index.html", "styles.css"]) {
  cpSync(new URL(path, import.meta.url), new URL(path, output), { recursive: true });
}
