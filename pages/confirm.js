import { withRouter } from "next/router";
// import MainLayout from "../layouts/MainLayout";
// import MainDiv from "../components/MainDiv";
// // import MainCard from "../components/MainCard";
// import Pagination from "../components/Pagination";
import ConfirmUser from "../components/ConfirmUser";

/* <Pagination
      searchterm={props.router.query.term}
      by={props.router.query.by}
    /> */

const Content = withRouter(props => (
  <div>
    <ConfirmUser token={props.router.query.id} />
  </div>
));

const Page = props => (
  <div>
    <Content />
  </div>
);

// function handleSubmit(event, client) {
//   event.preventDefault();
//   const form = event.target;
//   const formData = new window.FormData(form);
//   const email = formData.get("email");
//   const password = formData.get("password");
// form.reset();

// client.mutate({
//   mutation: gql`
//     mutation login($email: String!, $password: String!) {
//       login(email: $email, password: $password)
//     }
//   `,
//   variables: { email, password }
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
//   });
// }

export default Page;
