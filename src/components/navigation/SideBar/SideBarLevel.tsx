import React, { FC, useState } from "react";
import { LevelData, PageData } from "../../../lib/static/read";
import { SideBarLevelContent, SideBarLevelTitle } from "./SideBarLevel.styles";
import { StyledIcon } from "../../util/StyledIcon";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import SideBarCategory from "./SideBarCategory";
import { nkebabToName } from "../../../lib/static/naming";

export interface SideBarLevelProps {
    level: LevelData;
    current: PageData;
    initiallyExpanded?: boolean;
}

const SideBarLevel: FC<SideBarLevelProps> = (p) => {
    const [expanded, setExpanded] = useState(p.initiallyExpanded ?? false);

    return (
        <>
            <SideBarLevelTitle onClick={() => setExpanded((e) => !e)}>
                <StyledIcon path={expanded ? mdiChevronDown : mdiChevronUp} />
                <h3
                    style={
                        nkebabToName(p.current.parts.level) === p.level.name
                            ? { fontWeight: 800 }
                            : {}
                    }
                >
                    {p.level.name}
                </h3>
            </SideBarLevelTitle>
            {expanded ? (
                <SideBarLevelContent>
                    {p.level.categories.map((category, key) => (
                        <SideBarCategory
                            category={category}
                            key={key}
                            initiallyExpanded={
                                category.name ===
                                nkebabToName(p.current.parts.category)
                            }
                            current={p.current}
                        />
                    ))}
                </SideBarLevelContent>
            ) : undefined}
        </>
    );
};

export default SideBarLevel;
