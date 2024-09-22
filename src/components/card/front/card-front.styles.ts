import styled from "@emotion/styled";

const Root = styled.div({
  backfaceVisibility: "hidden",
  position: "absolute",
  padding: "3rem 2rem",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.375rem",
});
// #DB1F29
const Header = styled.section({
  display: "flex",
  justifyContent: "space-between",
  a: {
    fontSize: "1.125rem",
    marginTop: "0.5rem",
    height: "fit-content",
    color: "rgba(0, 0, 0, 0.6)",
  },
});
const Body = styled.section({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  marginBottom: "1.25rem",
  h6: {
    fontSize: "1.25rem",
  },
  p: {
    fontSize: "1rem",
  },
  h2: { letterSpacing: "0.5rem", fontSize: "2.75rem", marginRight: "-0.5rem" },
  "& > div": {
    gap: "1.25rem",
    display: "flex",
    alignItems: "end",
    "& > div": {
      display: "flex",
      alignItems: "end",
      gap: "0.5rem",
    },
  },
});
const Info = styled.section({
  display: "flex",
  gap: "1.25rem",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1.5rem",
    gap: "0.75rem",
    p: {
      fontSize: "1.25rem",
    },
  },
  "& > div.title": {
    borderTop: "3px solid #DB1F29",
    color: "#DB1F29",
    p: {
      fontWeight: 600,
    },
  },
  "& > div.contents": {
    borderTop: "3px solid rgba(0, 0, 0, 0.24)",
    width: "100%",
  },
});
export const StyledCardFront = { Root, Header, Body, Info };
