import React, { FC, useEffect } from "react";
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";
import { FileTree, PageData } from "../../../../lib/static/read";
import { filetree } from "../../../../lib/static/cached";
import SideBar from "../../../../components/navigation/SideBar/SideBar";
import { LastPage } from "../../../../lib/state/keys";
import { readFileSync } from "fs";
import { resolve } from "path";
import PageView from "../../../../components/display/PageView/PageView";

export interface GuidePageProps {
    pagedata: FileTree;
    page: PageData;
    content: string;
}

const GuidePage: FC<GuidePageProps> = (p) => {
    useEffect(() => {
        if (localStorage.getItem(LastPage) !== p.page.path) {
            localStorage.setItem(LastPage, p.page.path);
        }
    }, [p]);

    return (
        <>
            <SideBar tree={p.pagedata} current={p.page} />
            <PageView content={p.content} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    if (!ctx.params)
        return {
            notFound: true,
        };

    const tree = filetree;

    const level = tree.levels[tree.indexes[ctx.params.level as string]];
    if (!level)
        return {
            notFound: true,
        };

    const category =
        level.categories[level.indexes[ctx.params.category as string]];
    if (!category)
        return {
            notFound: true,
        };

    const page = category.pages[category.indexes[ctx.params.page + ".md"]];
    if (!page)
        return {
            notFound: true,
        };

    const content = readFileSync(
        resolve(process.cwd(), "public", page.path.replace(/^\//, "")),
        "utf-8",
    );

    return {
        props: {
            pagedata: tree,
            page: page,
            content,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async (_ctx) => {
    const paths: GetStaticPathsResult["paths"] = [];

    for (const level of filetree.levels) {
        for (const category of level.categories) {
            for (const page of category.pages) {
                paths.push({
                    params: {
                        level: page.parts.level,
                        category: page.parts.category,
                        page: page.parts.page.replace(/.md$/, ""),
                    },
                });
            }
        }
    }

    return {
        paths,
        fallback: false,
    };
};

export default GuidePage;
