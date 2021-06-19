import React, { FC, ReactNode, useState } from "react";
import {
    TutorialListCategoryContainer,
    TutorialListCategoryContentContainer,
    TutorialListLevelContainer,
    TutorialListLevelContentContainer,
    TutorialListPageContainer,
} from "./TutorialList.styles";
import { StyledIcon } from "../util/StyledIcon";
import { mdiChevronDown, mdiChevronUp, mdiLink } from "@mdi/js";
import { CategoryData, LevelData } from "../../lib/static/read";
import { useRouter } from "next/router";

export const TutorialListLevel: FC<{ level: LevelData }> = (p) => {
    const [expanded, setExpanded] = useState(false);

    const categories: ReactNode[] = [];

    if (expanded) {
        for (const category of p.level.categories) {
            categories.push(
                <TutorialListCategory
                    category={category}
                    key={categories.length}
                />,
            );
        }
    }

    return (
        <>
            <TutorialListLevelContainer onClick={() => setExpanded(!expanded)}>
                <StyledIcon path={expanded ? mdiChevronUp : mdiChevronDown} />
                <h2>{p.level.name}</h2>
            </TutorialListLevelContainer>
            <TutorialListLevelContentContainer>
                {categories}
            </TutorialListLevelContentContainer>
        </>
    );
};

export const TutorialListCategory: FC<{ category: CategoryData }> = (p) => {
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();

    const pages: ReactNode[] = [];

    if (expanded) {
        for (const page of p.category.pages) {
            pages.push(
                <TutorialListPageContainer
                    key={pages.length}
                    onClick={() =>
                        router.push(
                            "/view/[level]/[category]/[page]",
                            page.link,
                        )
                    }
                >
                    <StyledIcon path={mdiLink} />
                    <h4>{page.name}</h4>
                </TutorialListPageContainer>,
            );
        }
    }

    return (
        <>
            <TutorialListCategoryContainer
                onClick={() => setExpanded(!expanded)}
            >
                <StyledIcon path={expanded ? mdiChevronUp : mdiChevronDown} />
                <h3>{p.category.name}</h3>
            </TutorialListCategoryContainer>
            <TutorialListCategoryContentContainer>
                {pages}
            </TutorialListCategoryContentContainer>
        </>
    );
};
