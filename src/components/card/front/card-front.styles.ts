import styled from "@emotion/styled";
import { mediaQuery } from "styles/style";

const Root = styled.div({
  backfaceVisibility: "hidden",
  position: "absolute",
  padding: "3rem 2rem",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  justifyContent: "space-between",
  ...mediaQuery("sm", {
    justifyContent: "end",
    gap: "0.375rem",
    height: "auto",
  }),
});
// #DB1F29
const Header = styled.section({
  ...mediaQuery("sm", {
    display: "flex",
    a: {
      fontSize: "1.125rem",
      marginTop: "0.5rem",
      height: "fit-content",
      color: "rgba(0, 0, 0, 0.6)",
    },
  }),

  justifyContent: "space-between",
  a: {
    height: "fit-content",
    color: "rgba(0, 0, 0, 0.6)",
  },
});
const Body = styled.section({
  h6: {
    display: "none",
  },
  h5: {
    fontSize: "1rem",
  },
  p: {
    fontSize: ".75rem",
  },
  h2: {
    letterSpacing: "0.5rem",
    fontSize: "2rem",
    marginRight: "-0.5rem",
  },
  ...mediaQuery("sm", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "1.25rem",
    h6: {
      display: "block",
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    p: {
      fontSize: "1rem",
    },
    h2: {
      fontSize: "2.75rem",
      marginRight: "-0.5rem",
    },
    div: {
      display: "flex",
      alignItems: "end",
    },
    "& > div": {
      gap: "1.25rem",
      "& > div": {
        gap: "0.5rem",
      },
    },
  }),
});
const Info = styled.section({
  borderTop: "2px solid rgba(0,0,0,0.24)",
  "& > div": {
    paddingTop: "0.5rem",

    "& > div.title": {
      color: "#DB1F29",
      p: {
        fontWeight: 600,
      },
    },
    "& > div.contents": {
      width: "100%",
    },
  },
  ...mediaQuery("sm", {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    borderTop: "none",
    "& > div": {
      display: "flex",
      gap: "1.25rem",
      p: {
        fontSize: "1.25rem",
      },
      "& > div.title": {
        width: "12.5%",
      },
      ":first-of-type": {
        paddingTop: 0,
        "& > div": {
          paddingTop: "1.5rem",
        },
        "& > div.title": {
          borderTop: "3px solid #DB1F29",
        },
        "& > div.contents": {
          borderTop: "3px solid rgba(0, 0, 0, 0.24)",
        },
      },
    },
  }),
});
export const StyledCardFront = { Root, Header, Body, Info };
