import React, { FC, useState } from "react";
import { TutorialListLevelContainer } from "./TutorialList.styles";
import { StyledIcon } from "../util/StyledIcon";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

export const TutorialListLevel: FC<{ name: string }> = (p) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <TutorialListLevelContainer onClick={() => setExpanded(!expanded)}>
            <StyledIcon path={expanded ? mdiChevronUp : mdiChevronDown} />
            <h2>{p.name}</h2>
        </TutorialListLevelContainer>
    );
};
