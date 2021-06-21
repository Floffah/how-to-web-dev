import React, { FC } from "react";
import { defaultSSG } from "../lib/static/ssg";
import { IndexDescription, IndexHeader } from "../styles/IndexPage.styles";
import { FileTree } from "../lib/static/read";
import TutorialList from "../components/display/TutorialList/TutorialList";

const IndexPage: FC<{ pagedata: FileTree }> = (p) => {
    return (
        <>
            <IndexHeader>How to web dev</IndexHeader>
            <IndexDescription>
                A full-stack web development tutorial series for beginners all
                the way to experts. Covers frontend and backend + other cool
                stuff
            </IndexDescription>
            <TutorialList list={p.pagedata} />
        </>
    );
};

export const getStaticProps = defaultSSG;

export default IndexPage;
