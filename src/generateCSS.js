const fs = require("fs");
const path = require("path");
const colors = require("@radix-ui/colors");

const formatCSSVars = (colorName, colorObj, isDark, isP3) => {
  const prefix = `--color-${colorName}${isDark ? "-dark" : ""}${
    isP3 ? "-p3" : ""
  }`;
  return Object.entries(colorObj)
    .map(
      ([shade, value]) =>
        `  ${prefix}-${shade.replace(colorName, "")}: ${value};`
    )
    .join("\n");
};

const main = () => {
  const filteredColors = Object.entries(colors).filter(
    ([colorName]) => !colorName.endsWith("A")
  );

  const cssVars = filteredColors
    .map(([colorName, colorObj]) => {
      const isDark = colorName.includes("Dark");
      const isP3 = colorName.includes("P3");
      const baseName = colorName.replace("Dark", "").replace("P3", "");
      return formatCSSVars(baseName, colorObj, isDark, isP3);
    })
    .join("\n\n");

  const customVariant = `@custom-variant supports-p3 {
  @supports (color: color(display-p3 1 1 1)) {
    @media (color-gamut: p3) {
      @slot;
    }
  }
}`;

  const cssContent = `${customVariant}\n\n@theme {\n${cssVars}\n}`;

  const outputPath = path.resolve(__dirname, "../dist/theme.css");
  fs.writeFileSync(outputPath, cssContent);
  console.log("Created theme.css in /dist");
};

main();
