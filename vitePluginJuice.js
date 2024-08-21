import declassify from "declassify";
import { readFileSync, writeFileSync } from "fs";
import juice from "juice";
import { resolve } from "path";

export default function () {
  return {
    writeBundle: (options, bundle) => {
      for (const [key, assetInfo] of Object.entries(bundle)) {
        // Perform your custom operations on the CSS files
        if (key.endsWith(".html")) {
          console.log(`Processing html file: ${key}`);
          const cssContent = readFileSync(
            resolve(__dirname, "dist", "assets", "index.css"),
            "utf8"
          );
          const inlinedHtml = juice.inlineContent(assetInfo.source, cssContent);
          const declassified = declassify.process(inlinedHtml);
          const indexHtml = writeFileSync(
            resolve(__dirname, "dist", "index.html"),
            declassified
          );
        }
      }
    },
  };
}
