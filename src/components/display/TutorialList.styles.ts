import styled from "styled-components";
import { StyledIcon } from "../util/StyledIcon";

export const TutorialListContainer = styled.div`
    padding: 0 10px;
    margin: auto;
    position: relative;
    width: 600px;

    @media screen and (max-width: 600px) {
        margin: 0;
        width: 100%;
    }
`;

export const TutorialListLevelContainer = styled.div`
    h2 {
        display: inline-block;
        margin: 5px 0 2px 0;
        position: relative;
        top: -2px;
    }

    user-select: none;
    cursor: pointer;
`;

export const TutorialListLevelContentContainer = styled.div``;

export const TutorialListCategoryContainer = styled.div`
    h3 {
        display: inline-block;
        margin: 5px 0 0 0;
        position: relative;
        top: -2px;
    }

    ${StyledIcon} {
        margin-left: 17px;
    }

    user-select: none;
    cursor: pointer;
`;

export const TutorialListCategoryContentContainer = styled.div``;

export const TutorialListPageContainer = styled.div`
    h4 {
        display: inline-block;
        margin: 5px 0 0 5px;
        position: relative;
        top: -5px;
    }

    ${StyledIcon} {
        margin-left: 39px;
    }

    user-select: none;
    cursor: pointer;
`;
