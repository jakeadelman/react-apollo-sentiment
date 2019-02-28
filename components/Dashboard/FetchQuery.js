import { Query } from "react-apollo";
import ReChart from "../Charts/ReChart";
import Sidebar from "../Categories/Menu";
import gql from "graphql-tag";
import styled from "styled-components";
// import { storesContext } from "../../stores/UserStore";

export default function FetchQuery() {
  // const store = useContext(storesContext);
  // console.log(store);

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
            <ChartWrapper>
              <ReChart data={data} />
            </ChartWrapper>
            <Sidebar />
          </Wrapper>
        );
      }}
    </Query>
  );
}

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
