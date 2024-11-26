import styled from "@emotion/styled";
import { fonts } from "@src/styles";
import React from "react";

const Link = styled.a`
${fonts.footerFont};
text-decoration: none;
flex: 1;
`;

const Root = styled.div`
display: flex;
justify-content: center;
height: 60px;
width: 100%;
align-items: flex-end;
flex-shrink: 0;
flex: 1;
padding: 14px 0;
`

const Footer = () => <Root>
    <Link rel="noopener, noreferrer" href={'https://youngmarket.net'} target="_blank">youngmarket.net</Link>
</Root>;

export default Footer
