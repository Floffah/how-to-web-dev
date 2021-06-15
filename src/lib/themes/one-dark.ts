import { darken, hsl, rgba } from "polished";
import { Theme } from "./theme";

// https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/colors.less

export const OneDarkConfig = {
    SyntaxHue: 220,
    SyntaxSaturation: 0.13,
    SyntaxBrightness: 0.18,
};

export const OneDarkMonochrome = {
    Mono1: hsl(OneDarkConfig.SyntaxHue, 0.14, 0.71),
    Mono2: hsl(OneDarkConfig.SyntaxHue, 0.09, 0.55),
    Mono3: hsl(OneDarkConfig.SyntaxHue, 0.1, 0.4),
};

export const OneDarkColors = {
    Hue1: hsl(187, 0.47, 0.55),
    Hue2: hsl(207, 0.82, 0.66),
    Hue3: hsl(286, 0.6, 0.67),
    Hue4: hsl(95, 0.38, 0.62),

    Hue5: hsl(355, 0.65, 0.65),
    Hue5_2: hsl(5, 0.48, 0.51),

    Hue6: hsl(29, 0.54, 0.61),
    Hue6_2: hsl(39, 0.67, 0.69),
};

export const SyntaxFG = OneDarkMonochrome.Mono1;
export const OneDarkBaseColors = {
    SyntaxFG,
    SyntaxBG: hsl(
        OneDarkConfig.SyntaxHue,
        OneDarkConfig.SyntaxSaturation,
        OneDarkConfig.SyntaxBrightness,
    ),
    SyntaxGutter: darken(0.26, SyntaxFG),
    SyntaxGuide: rgba(SyntaxFG, 0.15),
    SyntaxAccent: hsl(OneDarkConfig.SyntaxHue, 1, 0.66),
};

export const OneDarkTheme: Theme = {
    name: "One Dark",

    primary: OneDarkBaseColors.SyntaxAccent,
    secondary: OneDarkBaseColors.SyntaxFG,
    success: OneDarkColors.Hue4,
    danger: OneDarkColors.Hue5,
    warning: OneDarkColors.Hue6_2,
    info: OneDarkColors.Hue2,
    front: OneDarkBaseColors.SyntaxFG,
    back: OneDarkBaseColors.SyntaxBG,

    shiftfront: "lighten",
    shiftback: "darken",
};
