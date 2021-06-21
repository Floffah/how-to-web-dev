import styled, { ThemeProps } from "styled-components";
import { Theme } from "../../../lib/themes/theme";
import { shift } from "../../../lib/themes/resolve";

export const SideBarContainer = styled.div<ThemeProps<Theme>>`
    position: absolute;
    height: 100%;
    width: 250px;
    left: 0;
    top: 0;
    background-color: ${(props) =>
        shift(props.theme.shiftback, 0.05, props.theme.back)};
`;

export const SideBarHeader = styled.h2`
    text-align: center;
    user-select: none;
    cursor: pointer;
`;

export const SideBarTreeContainer = styled.div`
    padding: 0 0 0 10px;
`;
