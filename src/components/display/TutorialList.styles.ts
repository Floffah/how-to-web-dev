import styled from "styled-components";

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
        margin-left: 5px;
        margin-top: 0;
        position: relative;
        top: -2px;
    }
`;
