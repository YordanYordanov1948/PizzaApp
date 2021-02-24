import React from "react";
import styled from "styled-components";
import AuxReact from "./Hoc/AuxReact";

const Layout = (props) => (
  <AuxReact>
    <Main>{props.children}</Main>
  </AuxReact>
);

export default Layout;

const Main = styled.div`
  color: #dc143c;
`;
