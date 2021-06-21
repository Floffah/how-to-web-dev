import { GetStaticProps, GetStaticPropsContext } from "next";
import { filetree } from "./cached";

export function defaultStaticProps(_ctx: GetStaticPropsContext) {
    return {
        pagedata: filetree,
    };
}

export const defaultSSG: GetStaticProps = async (ctx) => ({
    props: {
        ...defaultStaticProps(ctx),
    },
});
