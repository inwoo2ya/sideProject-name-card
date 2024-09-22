import styled from "@emotion/styled";

const Root = styled.div({
  backfaceVisibility: "hidden",
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transform: "rotateY(180deg)",
  gap: "2.5rem",
  zIndex: 1,
  p: {
    fontWeight: 600,
    fontSize: "2.5rem",
  },
  div: {
    display: "flex",
    gap: "1.25rem",
  },
});
const Content = styled.div({
  fontSize: "1.25rem",
  img: {
    width: "60px",
    borderRadius: "999px",
    "&:hover": {
      opacity: "0.6",
    },
  },
});
export const StyledCardBack = { Root, Content };
