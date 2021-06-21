import React, { FC } from "react";
import {
    createGlobalStyle,
    ThemeProps,
    ThemeProvider,
} from "styled-components";
import { Theme } from "./theme";
import { shift } from "./resolve";

export const GlobalStyles = createGlobalStyle<ThemeProps<Theme>>`
  body, html {
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.back};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  p, span, ul, ol {
    color: ${(props) => props.theme.front};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => shift(props.theme.shiftback, 0.12, props.theme.front)};
  }

  a {
    color: ${(props) => props.theme.primary};
    cursor: pointer;

    &:active {
      color: ${(props) =>
          shift(props.theme.shiftback, 0.15, props.theme.primary)};
    }
  }
`;

export const ApplyGlobalStyles: FC<{ theme: Theme }> = (p) => {
    return (
        <>
            <ThemeProvider theme={p.theme}>
                <GlobalStyles />
                {p.children}
            </ThemeProvider>
        </>
    );
};
