import { extendTheme } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

export const defaultTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,

  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    blue: {
      500: "#00A3FF",
    },
  },
});

export const mergeThemeWithDefaults = (): Dict => extendTheme(defaultTheme);
