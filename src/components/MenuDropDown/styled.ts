import { styled } from "@stitches/react";

export const StyledMenu = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: "#02B1C8",
  width: "150px",
  position: "absolute",
  right: "0",
  bottom: "-25px",
  zIndex: "10",
  gap: "15px",
  padding: "5px",
  borderRadius: "4px",
  transition: "ease 1s",

  button: {
    width: "120px",
  },

  a: {
    width: "120px",
    padding: "10px",
    fontSize: "15px",
    background: "White",
    border: "1px solid $primaryColor",
    color: "$primaryColor",
    fontWeight: "600",
    borderRadius: "4px",
    transition: "ease 0.2s",
    textAlign: "center",

    "&:hover": {
      background: "$primaryColor",
      color: "White",
      cursor: "pointer",
    },
  },
});
