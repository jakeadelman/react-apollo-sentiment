import React from "react";
import styled from "styled-components";
import { wideFont } from "../shared/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarCategoryListHeader = () => (
  <Header>
    cryptocurrencies
    <FontAwesomeIcon icon="angle-down" style={{ marginLeft: "5px" }} />
  </Header>
);

export default SidebarCategoryListHeader;

const Header = styled.span`
  ${wideFont}
  font-weight:600;
  display: block;
  padding: 12px;
  text-align: center;
  color: ${props => props.theme.mutedText};
`;
