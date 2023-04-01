import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      alive: "#9cffac",
      dead: "#ff9c9c",
      unknown: "#cccccc",
      primaryColor: "#02b1c8",
    },
  },
});
