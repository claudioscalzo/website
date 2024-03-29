import { merge } from "theme-ui";
import tailwind from "@theme-ui/preset-tailwind";

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `light`,
  },
  colors: {
    primary: `#ff7514`,
    secondary: tailwind.colors.indigo[6],
    text: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    background: tailwind.colors.gray[1],
    divider: tailwind.colors.gray[2],
    textMuted: tailwind.colors.gray[6],
    icon_brightest: tailwind.colors.gray[2],
    icon_darker: tailwind.colors.gray[4],
    icon_darkest: tailwind.colors.gray[6],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],
  },
  breakpoints: [`500px`, `800px`, `900px`, `1200px`, `1600px`],
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
    },
    p: {
      fontSize: [15, 25, 30],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
      listStyle: `bullet`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [15, 20, 25],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [48, 65, 70],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `primary`,
      maxWidth: `80%`,
    },
    h2: {
      fontSize: [35, 40, 45],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [25, 30, 35],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [15, 20, 25],
      color: `heading`,
    },
    h5: {
      fontSize: [10, 15, 20],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [18, 25, 30],
      },
    },
  },
});

export default theme;
