import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import PostUpvoter from "./PostUpvoter";

export const allPostsQuery = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;
export const allPostsQueryVars = {
  skip: 0,
  first: 10
};

export default function PostList() {
  return (
    <Query query={allPostsQuery} variables={allPostsQueryVars}>
      {({ loading, error, data: { allPosts, _allPostsMeta }, fetchMore }) => {
        if (error) return <ErrorMessage message="Error loading posts." />;
        if (loading) return <div>Loading</div>;

        const areMorePosts = allPosts.length < _allPostsMeta.count;
        return (
          <section>
            <ul>
              {allPosts.map((post, index) => (
                <li key={post.id}>
                  <div>
                    <span>{index + 1}. </span>
                    <a href={post.url}>{post.title}</a>
                    <PostUpvoter id={post.id} votes={post.votes} />
                  </div>
                </li>
              ))}
            </ul>
            {areMorePosts ? (
              <button onClick={() => loadMorePosts(allPosts, fetchMore)}>
                {loading ? "Loading..." : "Show More"}{" "}
              </button>
            ) : (
              ""
            )}
          </section>
        );
      }}
    </Query>
  );
}

function loadMorePosts(allPosts, fetchMore) {
  fetchMore({
    variables: {
      skip: allPosts.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
      });
    }
  });
}
