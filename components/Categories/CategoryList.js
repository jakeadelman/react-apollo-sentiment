import styled from "styled-components";
import React from "react";
import { inject, observer } from "mobx-react";

const SidebarCategoryList = inject("store")(
  observer(({ store }) => {
    function handleClick(value) {
      store.changeDate(value);
    }
    return (
      <CategoryList>
        {store.date == "today" ? (
          <ItemActive onClick={() => handleClick("today")}>Today</ItemActive>
        ) : (
          <Item onClick={() => handleClick("today")}>Today</Item>
        )}
        {store.date == "yesterday" ? (
          <ItemActive onClick={() => handleClick("yesterday")}>
            Yesterday
          </ItemActive>
        ) : (
          <Item onClick={() => handleClick("yesterday")}>Yesterday</Item>
        )}
        {store.date == "this week" ? (
          <ItemActive onClick={() => handleClick("this week")}>
            This Week
          </ItemActive>
        ) : (
          <Item onClick={() => handleClick("this week")}>This Week</Item>
        )}
        {store.date == "this month" ? (
          <ItemActive onClick={() => handleClick("this month")}>
            This Month
          </ItemActive>
        ) : (
          <Item onClick={() => handleClick("this month")}>This Month</Item>
        )}
        {store.date == "custom" ? (
          <ItemActive onClick={() => handleClick("custom")}>Custom</ItemActive>
        ) : (
          <Item onClick={() => handleClick("custom")}>Custom</Item>
        )}
      </CategoryList>
    );
  })
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
  color: white;
  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${props => props.theme.accent};
  }
  &:hover {
    background-color: #fff;
    color: #212529;
    cursor: pointer;
  }
`;
const ItemActive = styled.div`
  padding: 12px;
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.theme.normalText};
  color: white;
  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${props => props.theme.accent};
  }

  background-color: #fff;
  color: #212529;
  cursor: pointer;
`;
