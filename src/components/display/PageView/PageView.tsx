import React from "react";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { PageViewContainer } from "./PageView.styles";
import { MarkdownComponents } from "../../../lib/md/components";

export interface PageViewProps {
    content: string;
}

const PageView: FC<PageViewProps> = (p) => {
    return (
        <PageViewContainer>
            <ReactMarkdown components={MarkdownComponents}>
                {p.content}
            </ReactMarkdown>
        </PageViewContainer>
    );
};

export default PageView;
