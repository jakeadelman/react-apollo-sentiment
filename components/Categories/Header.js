import React from "react";
import styled from "styled-components";

const SidebarCategoryListHeader = () => <Header>cryptocurrencies</Header>;

export default SidebarCategoryListHeader;

const Header = styled.span`
  display: block;
  padding: 12px;
  text-align: center;
  color: ${props => props.theme.mutedText};
`;
