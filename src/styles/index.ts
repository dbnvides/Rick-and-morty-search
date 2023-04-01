import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText, css } = createStitches({
  media: {
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 768px)",
  },

  theme: {
    colors: {
      alive: "#9cffac",
      dead: "#ff9c9c",
      unknown: "#cccccc",
      primaryColor: "#02b1c8",
    },
  },
});
