import { ITheme } from "../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#bbbbbb",
    success: "#4caf50",
    danger: "#f44336 ",

    bg: "#f5f5f5",
    font: "#19191B",
  },

  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(min-width: 960px)",
    medium: "(min-width: 720px)",
    small: "(min-width: 540px)",
    smallMax: "(max-width: 540px)",
  },
};
