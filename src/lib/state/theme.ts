import { atom } from "jotai";
import { Theme } from "../themes/theme";
import { OneDarkTheme } from "../themes/one-dark";

export const themeAtom = atom<Theme>(OneDarkTheme);
