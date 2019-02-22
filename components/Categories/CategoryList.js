import styled from "styled-components";
import React from "react";

const SidebarCategoryList = () => (
  <CategoryList>
    <Item>onecat</Item>
    <Item>twocat</Item>
  </CategoryList>
);

export default SidebarCategoryList;

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 12px;
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.theme.normalText};

  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${props => props.theme.accent};
  }
`;
