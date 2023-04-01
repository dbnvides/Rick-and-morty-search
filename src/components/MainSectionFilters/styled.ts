import { styled } from "@/styles";

export const StyledFilter = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100%",

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    button: {
      maxWidth: "80%",
    },
  },

  "@tablet": {
    display: "flex",
    flex: "row",

    div: {
      display: "flex",
      alignSelf: "flex-end",
      flexDirection: "row",
      alignItems: "center",
      gap: "20px",
      width: "500px",
      height: "50px",
    },

    button: {
      padding: "2px",
      width: "120px",
      maxWidth: "100%",
    },
  },
});
