import styled from "@emotion/styled";
import { mediaQuery } from "styles/style";

export const StyledCard = styled("div", {
  shouldForwardProp: prop => !["isVisible"].includes(prop.toString()),
})<{ isVisible: boolean }>(({ isVisible }) => ({
  overflow: "visible",
  display: "flex",
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "0.25rem",
  boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.3)",
  transition: "transform 0.4s",
  perspectiveOrigin: "center",
  transformStyle: "preserve-3d",
  transform: isVisible ? "rotateY(180deg)" : "rotateY(0deg)",
}));
export const CardWrap = styled("div", {
  shouldForwardProp: prop => !["isMobile"].includes(prop.toString()),
})<{ isMobile: boolean }>(({ isMobile }) => ({
  width: "100vw",
  maxWidth: "375px",
  height: "100vh",
  maxHeight: "667px",
  ...mediaQuery("sm", {
    maxWidth: "787.5px",
    maxHeight: "437.5px",
  }),
  perspective: "1200px",
}));
export const Button = styled.button({
  backgroundColor: "white",
  position: "absolute",
  border: "none",
  cursor: "pointer",
  top: "10%",
  "&:hover": {
    backgroundColor: "lightgray",
  },
});
