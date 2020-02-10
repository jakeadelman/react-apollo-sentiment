import React from "react";
import styled from "styled-components";
import { wideFont } from "../shared/helpers";

const SidebarCategoryListHeader = () => <Header>Change Date</Header>;

export default SidebarCategoryListHeader;

const Header = styled.span`
  ${wideFont}
  font-weight:600;
  display: block;
  padding: 12px;
  text-align: center;
  color: ${props => props.theme.mutedText};
  color: white;
`;
