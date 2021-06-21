import React from "react";
import { Components } from "react-markdown/src/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const MarkdownComponents: Components = {
    code(p) {
        const match = /language-(\w+)/.exec(p.className || "");

        return !p.inline && match ? (
            <SyntaxHighlighter
                style={dracula} // why not use one dark? 2 reasons; 1) i cant be bothered to make a scheme for prism because it looks like it would take a while and im lazy; 2) this looks fine for now feel free to contribute a better one though
                language={match[1]}
                PreTag="div"
                {...p.props}
            >
                {String(p.children).replace(/\n$/, "")}
            </SyntaxHighlighter>
        ) : (
            <code className={p.className} {...p.props} />
        );
    },
};
