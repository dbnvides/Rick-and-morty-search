import { styled } from "@stitches/react";

export const StyledInput = styled("input", {
  display: "block",
  margin: "20px 0",
  fontSize: "18px",
  width: "100%",
  height: "40px",
  paddingRight: "10px",
  paddingLeft: "10px",
  border: "2px solid $primaryColor",
  borderRadius: "4px",
  outline: "none",

  "@tablet": {
    width: "40%",
  },
});
