import { styled } from "@stitches/react";

export const TitleSearch = styled("h1", {
  textAlign: "center",
  margin: "20px 0",
});

export const FilterTitleSearch = styled("h3", {
  textAlign: "center",
  margin: "15px 0",
});

export const Main = styled("main", {
  minHeight: "90vh",
});

export const StyledPagination = styled("div", {
  width: "100%",
  alignSelf: "center",
  position: "relative",
  height: "40px",
});

export const StyledNextPage = styled("button", {
  position: "absolute",
  right: "0px",
});

export const StyledPreviousPage = styled("button", {
  position: "absolute",
  left: "0px",
});

export const StyledNumberPage = styled("span", {
  position: "absolute",
  left: "50%",
  padding: "10px",
  fontSize: "15px",
  background: "White",
  border: "1px solid $primaryColor",
  color: "$primaryColor",
  fontWeight: "600",
  borderRadius: "4px",
  transition: "ease 0.2s",
});
