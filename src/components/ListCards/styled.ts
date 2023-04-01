import { styled } from "@/styles";

export const StyledListCard = styled("ul", {
  width: "100%",
  maxWidth: "100%",
  height: "410px",
  maxHeight: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  overflowX: "scroll",
  overflowY: "hidden",

  "@tablet": {
    overflowX: "hidden",
    overflowY: "scroll",
    height: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0",
    padding: "10px",
  },
});
