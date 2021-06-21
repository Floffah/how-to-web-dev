import { CategoryData, PageData } from "../../../lib/static/read";
import React, { FC, useState } from "react";
import { StyledIcon } from "../../util/StyledIcon";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import {
    SideBarCategoryContent,
    SideBarCategoryTitle,
} from "./SideBarCategory.styles";
import SideBarPage from "./SideBarPage";
import { nkebabToName } from "../../../lib/static/naming";

export interface SideBarCategoryProps {
    category: CategoryData;
    current: PageData;
    initiallyExpanded?: boolean;
}

const SideBarCategory: FC<SideBarCategoryProps> = (p) => {
    const [expanded, setExpanded] = useState(p.initiallyExpanded ?? false);

    return (
        <>
            <SideBarCategoryTitle onClick={() => setExpanded((e) => !e)}>
                <StyledIcon path={expanded ? mdiChevronDown : mdiChevronUp} />
                <h3
                    style={
                        nkebabToName(p.current.parts.category) ===
                        p.category.name
                            ? { fontWeight: 800 }
                            : {}
                    }
                >
                    {p.category.name}
                </h3>
            </SideBarCategoryTitle>
            {expanded ? (
                <SideBarCategoryContent>
                    {p.category.pages.map((page, key) => (
                        <SideBarPage
                            current={p.current}
                            key={key}
                            page={page}
                        />
                    ))}
                </SideBarCategoryContent>
            ) : undefined}
        </>
    );
};

export default SideBarCategory;
