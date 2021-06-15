import { readdirSync } from "fs";
import { resolve } from "path";

export const nkebabToName = (str: string) =>
    str
        .replace(/^[0-9]+-/, "")
        .replace(/.md$/, "")
        .replace(/-/g, " ")
        .replace(/(?:^|\s)\S/g, (s) => s.toUpperCase());

export async function buildFileTree() {
    // data of public/tutorials
    const data = {
        indexes: {} as { [k: string]: number },
        levels: [], // array of public/tutorials/{this}
    } as FileTree;

    const levels = readdirSync(resolve(process.cwd(), "public", "tutorials"));

    for (let il = 0; il < levels.length; il++) {
        data.indexes[levels[il]] = il;

        // data of public/tutorials/{level}
        const leveldata = {
            name: nkebabToName(levels[il]),
            indexes: {},
            categories: [], // array of public/tutorials/(level)/{this}
        } as LevelData;

        const categories = readdirSync(
            resolve(process.cwd(), "public", "tutorials", levels[il]),
        );

        for (let ic = 0; ic < categories.length; ic++) {
            leveldata.indexes[categories[ic]] = ic;

            // data of public/tutorials/{level}/{category}
            const categorydata = {
                name: nkebabToName(categories[ic]),
                indexes: {},
                pages: [], // array of public/tutorials/(level)/(category)/{this}
            } as CategoryData;

            const pages = readdirSync(
                resolve(
                    process.cwd(),
                    "public",
                    "tutorials",
                    levels[il],
                    categories[ic],
                ),
            );

            for (let ip = 0; ip < pages.length; ip++) {
                categorydata.indexes[pages[ip]] = ip;

                const pagedata = {
                    name: nkebabToName(pages[ip]),
                    path: `/tutorials/${levels[il]}/${categories[ic]}/${pages[ip]}`,
                    link: `/${levels[il]}/${categories[ic]}/${pages[ip].replace(
                        /.md$/,
                        "",
                    )}`,
                } as PageData;

                categorydata.pages.push(pagedata);
            }

            leveldata.categories.push(categorydata);
        }

        data.levels.push(leveldata);
    }

    return data;
}

export interface FileTree {
    indexes: { [k: string]: number };
    levels: LevelData[];
}

export interface LevelData {
    name: string;
    indexes: { [k: string]: number };
    categories: CategoryData[];
}

export interface CategoryData {
    name: string;
    indexes: { [k: string]: number };
    pages: PageData[];
}

export interface PageData {
    name: string;
    path: string;
    link: string;
}
