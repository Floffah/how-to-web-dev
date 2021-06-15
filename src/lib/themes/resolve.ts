import { darken, lighten } from "polished";

export const shift = (type: "darken" | "lighten", n: number, c: string) => {
    if (type === "darken") {
        return darken(n, c);
    } else {
        return lighten(n, c);
    }
};
