import { Query } from "react-apollo";
import ReChart from "../Charts/ReChart";
import Sidebar from "../Categories/Menu";
import gql from "graphql-tag";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

// import { storesContext } from "../../stores/UserStore";

const FetchQuery = inject("store")(
  observer(({ store }) => {
    if (store) {
      let theStore = store;
      console.log(theStore.isAuth);
    }
    const clicked = () => {
      store.isAuth = !store.isAuth;
      console.log(store.isAuth);
    };

    let fetchFourHourSentVariables = {
      term: "bitcoin"
    };
    return (
      <Query
        query={fetchFourHourSentQuery}
        variables={fetchFourHourSentVariables}
      >
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;

          return (
            <Wrapper>
              <button onClick={clicked}>click in query</button>
              <ChartWrapper>
                <ReChart data={data} />
              </ChartWrapper>
              <Sidebar />
            </Wrapper>
          );
        }}
      </Query>
    );
  })
);

export default FetchQuery;

const fetchFourHourSentQuery = gql`
  query fetchFourHourSent($term: String!) {
    fetchFourHourSent(term: $term) {
      id
      term
      sentiment
      hour
    }
  }
`;

const ChartWrapper = styled.div`
  background: white;
  border: 1px solid #ebedf0;
  padding: 5px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 5vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-align;
`;
