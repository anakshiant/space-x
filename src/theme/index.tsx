import theme from "styled-theming";

const BACKGROUND_COLOR = theme("main", {
  light: "#F2F3F4",
  dark: "#283747",
});

const TEXT_COLOR = theme("main", {
  light: "#333333",
  dark: "#F8F9F9",
});

const BUTTON_BACKGROUND = theme("main", {
  light: "#ABEBC6",
  dark: "#ABEBC6",
});

const BUTTON_FOCUSED_BACKGROUND = theme("main", {
  light: "#28B463",
  dark: "#28B463",
});

export default {
  BACKGROUND_COLOR,
  TEXT_COLOR,
  BUTTON_BACKGROUND,
  BUTTON_FOCUSED_BACKGROUND
};
