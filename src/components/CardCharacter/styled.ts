import { styled } from "../../styles";

export const Card = styled("li", {
  minWidth: "250px",
  maxWidth: "250px",
  height: "330px",
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
    objectFit: "cover",
    objectPosition: "center",
    maxHeight: "100%",
    width: "100%",
  },
});

export const StyledDetail = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxHeight: "100%",
  height: "110px",
  maxWidth: "100%",
  whiteSpace: "nowrap",

  h2: {
    maxWidth: "90%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "24px",
    marginBottom: "5px",
    marginLeft: "5px",
  },

  h3: {
    maxWidth: "80%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "18px",
    marginBottom: "5px",
    marginLeft: "5px",
    fontWeight: "normal",
  },

  span: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});
