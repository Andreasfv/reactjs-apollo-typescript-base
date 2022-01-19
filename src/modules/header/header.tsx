import React from "react";
import styled from "styled-components";
interface Props {
    mobile: boolean;
}

const HeaderWrapper = styled.header`
    height: 70px;
    background-color: gray;
    width: 100%;
    ##height: 100%;
    position: relative;
    z-index: 10000;
    box-sizing: border-box;
`;

const Header: React.FC<Props> = () => {
    return <HeaderWrapper></HeaderWrapper>;
};

export default Header;
