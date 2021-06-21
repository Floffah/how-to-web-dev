import React, { FC } from "react";
import { PageData } from "../../../lib/static/read";
import { SideBarPageTitle } from "./SideBarPage.styles";
import { StyledIcon } from "../../util/StyledIcon";
import { mdiFile, mdiFileOutline } from "@mdi/js";
import { useRouter } from "next/router";
import { nkebabToName } from "../../../lib/static/naming";

export interface SideBarPageProps {
    page: PageData;
    current: PageData;
}

const SideBarPage: FC<SideBarPageProps> = (p) => {
    const router = useRouter();
    const isCurrent = nkebabToName(p.current.parts.page) === p.page.name;

    return (
        <SideBarPageTitle
            onClick={() =>
                router.push("/view/[level]/[category]/[page]", p.page.link)
            }
        >
            <StyledIcon path={isCurrent ? mdiFile : mdiFileOutline} />
            <h4 style={isCurrent ? { fontWeight: 800 } : {}}>{p.page.name}</h4>
        </SideBarPageTitle>
    );
};

export default SideBarPage;
