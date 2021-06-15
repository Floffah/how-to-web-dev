import { GetStaticProps, GetStaticPropsContext } from "next";
import { buildFileTree } from "./read";

export async function defaultStaticProps(_ctx: GetStaticPropsContext) {
    return {
        pagedata: await buildFileTree(),
    };
}

export const defaultSSG: GetStaticProps = async (ctx) => ({
    props: {
        ...(await defaultStaticProps(ctx)),
    },
});
