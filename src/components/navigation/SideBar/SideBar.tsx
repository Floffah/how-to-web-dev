import React, { FC } from "react";
import { FileTree, PageData } from "../../../lib/static/read";
import {
    SideBarContainer,
    SideBarHeader,
    SideBarTreeContainer,
} from "./SideBar.styles";
import { useRouter } from "next/router";
import SideBarLevel from "./SideBarLevel";
import { nkebabToName } from "../../../lib/static/naming";

export interface SideBarProps {
    tree: FileTree;
    current: PageData;
}

const SideBar: FC<SideBarProps> = (p) => {
    const router = useRouter();

    return (
        <SideBarContainer>
            <SideBarHeader onClick={() => router.push("/")}>
                How To Web Dev
            </SideBarHeader>
            <SideBarTreeContainer>
                {p.tree.levels.map((level, key) => (
                    <SideBarLevel
                        current={p.current}
                        level={level}
                        key={key}
                        initiallyExpanded={
                            level.name === nkebabToName(p.current.parts.level)
                        }
                    />
                ))}
            </SideBarTreeContainer>
        </SideBarContainer>
    );
};

export default SideBar;
