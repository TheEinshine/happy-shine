import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    light: {
      foreground: "rgb(var(--foreground-rgb))",
      backgroundStart: "rgb(var(--background-start-rgb))",
      backgroundEnd: "rgb(var(--background-end-rgb))",
    },
    dark: {
      foreground: "rgb(var(--foreground-rgb))",
      backgroundStart: "rgb(var(--background-start-rgb))",
      backgroundEnd: "rgb(var(--background-end-rgb))",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode("light.foreground", "dark.foreground")(props),
        bg: mode("light.backgroundStart", "dark.backgroundStart")(props),
        
      },
    }),
  },
});
