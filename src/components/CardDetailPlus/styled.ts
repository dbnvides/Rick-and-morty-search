import { styled } from "../../styles";

export const Card = styled("li", {
  minWidth: "250px",
  maxWidth: "300px",
  height: "470px",
  background: "White",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  border: "2px solid #02b1c8",
  position: "relative",
});

export const StyledSpan = styled("span", {
  padding: "2px 10px",
  fontSize: "14px",
  borderRadius: "4px",
  fontWeight: "bold",
  position: "absolute",
  right: "5px",
  bottom: "5px",

  variants: {
    color: {
      alive: {
        background: "$alive",
      },

      dead: {
        background: "$dead",
      },

      unknown: {
        background: "$unknown",
      },
    },
  },
});

export const StyledImage = styled("div", {
  maxWidth: "100%",
  height: "60%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: "2px",

  img: {
    objectFit: "contain",
    objectPosition: "center",
    maxHeight: "100%",
    width: "100%",
  },
});

export const StyledDetail = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "180px",
  maxHeight: "100%",
  maxWidth: "100%",

  h2: {
    maxWidth: "90%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "24px",
    marginBottom: "5px",
    marginLeft: "5px",
  },

  h3: {
    maxWidth: "100%",
    fontSize: "18px",
    marginBottom: "5px",
    marginLeft: "5px",
    fontWeight: "normal",

    span: {
      fontSize: "14px",
      fontWeight: "bold",
    },
  },

  span: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});

export const StyledMain = styled("main", {
  minWidth: "100vw",
  minHeight: "100vh",

  section: {
    minHeight: "80vh",
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
