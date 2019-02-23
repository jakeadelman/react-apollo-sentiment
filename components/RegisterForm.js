import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import { allPostsQuery, allPostsQueryVars } from "./PostList";

export default function Submit() {
  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <h1>Register</h1>
          <input
            placeholder="firstname"
            name="firstName"
            type="text"
            required
          />
          <input placeholder="lastname" name="lastName" type="text" required />
          <input placeholder="email" name="email" type="text" required />
          <input placeholder="password" name="password" type="text" required />
          <button type="submit">Submit</button>
        </form>
      )}
    </ApolloConsumer>
  );
}

function handleSubmit(event, client) {
  event.preventDefault();
  const form = event.target;
  const formData = new window.FormData(form);
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  form.reset();

  client.mutate({
    mutation: gql`
      mutation register(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
      ) {
        register(
          data: {
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
          }
        ) {
          id
        }
      }
    `,
    variables: { firstName, lastName, email, password }
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
