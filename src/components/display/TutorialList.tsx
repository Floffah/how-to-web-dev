import React, { FC, ReactNode, useMemo } from "react";
import { FileTree } from "../../lib/static/read";
import { TutorialListContainer } from "./TutorialList.styles";
import { TutorialListLevel } from "./TutorialList.utils";

const TutorialList: FC<{ list: FileTree }> = (p) => {
    const levels = useMemo(() => {
        const levels: ReactNode[] = [];

        for (const level of p.list.levels) {
            levels.push(
                <TutorialListLevel key={levels.length} level={level} />,
            );
        }

        return levels;
    }, [p]);

    return <TutorialListContainer>{levels}</TutorialListContainer>;
};

export default TutorialList;
