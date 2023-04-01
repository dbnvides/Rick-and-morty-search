import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    textDecoration: "none",
  },

  body: {
    minHeight: "100vh",
  },

  "h2,h3,h4,h5,h6,span": {
    color: "Black",
  },

  button: {
    padding: "10px",
    fontSize: "15px",
    background: "White",
    border: "1px solid $primaryColor",
    color: "$primaryColor",
    fontWeight: "600",
    borderRadius: "4px",
    transition: "ease 0.2s",

    "&:hover": {
      background: "$primaryColor",
      color: "White",
      cursor: "pointer",
    },
  },
});
