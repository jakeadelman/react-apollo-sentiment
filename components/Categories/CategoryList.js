import styled from "styled-components";
import React, { useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./cats.css";
import { transition } from "../shared/helpers";

const SidebarCategoryList = inject("store")(
  observer(({ store }) => {
    const [activeCurrency, setCurrency] = useState(store.currency);
    // console.log(currency);
    // const clicked = () => {
    //   if (store.currency == "bitcoin") {
    //     store.currency = "ethereum";
    //   } else if (store.currency == "ethereum") {
    //     store.currency = "bitcoin";
    //   }
    // };
    const currencyClicked = e => {
      console.log(e.target.value);
      // if (e.target.value !== currency) {
      store.currency = e.target.value;
      setCurrency(e.target.value);
      // }
    };

    return (
      <Query query={allCurrencies}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          console.log(data.allCurrencies);
          return (
            <CategoryList>
              {data.allCurrencies.map(currency => {
                return (
                  <Item
                    className={
                      activeCurrency == currency.name ? "active-currency" : ""
                    }
                  >
                    <UnstyledButton
                      value={currency.name}
                      onClick={e => currencyClicked(e)}
                    >
                      {currency.name.charAt(0).toUpperCase() +
                        currency.name.slice(1)}
                    </UnstyledButton>
                  </Item>
                );
              })}
            </CategoryList>
          );
        }}
      </Query>
    );
  })
);

const allCurrencies = gql`
  query AllCurrencies {
    allCurrencies {
      id
      name
      ticker
    }
  }
`;

const UnstyledButton = styled.button`
  ${transition}
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: 0 !important;
`;
// const SidebarCategoryList = () => (

// );

export default SidebarCategoryList;

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  ${transition}
  padding: 8px 12px;
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
