import styled from "@emotion/styled";

const Root = styled.div({
  backfaceVisibility: "hidden",
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "1.5rem",
  transform: "rotateY(180deg)",
  zIndex: 1,
});
export const StyledCardBack = { Root };
