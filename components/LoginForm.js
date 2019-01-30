import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import { allPostsQuery, allPostsQueryVars } from "./PostList";

export default function Submit() {
  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <h1>Submit</h1>
          <input placeholder="email" name="email" type="text" required />
          <input placeholder="password" name="password" type="text" required />
          <button type="submit">Submit</button>
          <style jsx>{`
            form {
              border-bottom: 1px solid #ececec;
              padding-bottom: 20px;
              margin-bottom: 20px;
            }
            h1 {
              font-size: 20px;
            }
            input {
              display: block;
              margin-bottom: 10px;
            }
          `}</style>
        </form>
      )}
    </ApolloConsumer>
  );
}

function handleSubmit(event, client) {
  event.preventDefault();
  const form = event.target;
  const formData = new window.FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  form.reset();

  client.mutate({
    mutation: gql`
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
      }
    `,
    variables: { email, password }
    // update: (proxy, { data: { createPost } }) => {
    //   const data = proxy.readQuery({
    //     query: allPostsQuery,
    //     variables: allPostsQueryVars
    //   });
    //   proxy.writeQuery({
    //     query: allPostsQuery,
    //     data: {
    //       ...data,
    //       allPosts: [createPost, ...data.allPosts]
    //     },
    //     variables: allPostsQueryVars
    //   });
    // }
  });
}
