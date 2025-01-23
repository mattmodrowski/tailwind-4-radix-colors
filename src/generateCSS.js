const fs = require("fs");
const path = require("path");
const colors = require("@radix-ui/colors");

const formatCSSVars = (colorName, colorObj, isDark) => {
  const prefix = isDark ? `--color-${colorName}-dark` : `--color-${colorName}`;
  return Object.entries(colorObj)
    .map(
      ([shade, value]) =>
        `  ${prefix}-${shade.replace(colorName, "")}: ${value};`
    )
    .join("\n");
};

const main = () => {
  const allColors = { ...colors };

  const filteredColors = Object.entries(allColors).filter(
    ([key]) => !key.endsWith("A") && !key.endsWith("P3") && !key.endsWith("P3A")
  );

  const cssVars = filteredColors
    .map(([colorName, colorObj]) => {
      const isDark = colorName.includes("Dark");
      const baseName = isDark ? colorName.replace("Dark", "") : colorName;
      return formatCSSVars(baseName, colorObj, isDark);
    })
    .join("\n\n");

  const cssContent = `@theme {\n${cssVars}\n}`;

  const outputPath = path.resolve(__dirname, "../dist/theme.css");
  fs.writeFileSync(outputPath, cssContent);
  console.log("Created theme.css in /dist");
};

main();
