import React, { FC, ReactNode } from "react";
import { FileTree } from "../../lib/static/read";
import { TutorialListContainer } from "./TutorialList.styles";
import { TutorialListLevel } from "./TutorialList.utils";

const TutorialList: FC<{ list: FileTree }> = (p) => {
    const levels: ReactNode[] = [];

    for (const level of p.list.levels) {
        levels.push(
            <TutorialListLevel key={levels.length} name={level.name} />,
        );
    }

    return <TutorialListContainer>{levels}</TutorialListContainer>;
};

export default TutorialList;
