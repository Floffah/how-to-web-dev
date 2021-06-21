export const nkebabToName = (str: string) =>
    str
        .replace(/^[0-9]+-/, "")
        .replace(/.md$/, "")
        .replace(/-/g, " ")
        .replace(/(?:^|\s)\S/g, (s) => s.toUpperCase());
