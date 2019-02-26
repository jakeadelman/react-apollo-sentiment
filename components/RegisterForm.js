import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import { allPostsQuery, allPostsQueryVars } from "./PostList";
import Input from "./Form2/Input";
import Label from "./form/Label";
import Button from "./shared/Button";
import FormWrapper from "./Form2/FormWrapper";
import styled from "styled-components";

export default function RegisterForm() {
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

  return (
    <ApolloConsumer>
      {client => (
        <FormWrapper>
          <StyledForm onSubmit={event => handleSubmit(event, client)}>
            <InputWrapper>
              <Label>firstname</Label>
              <Input
                placeholder="firstname"
                name="firstName"
                type="text"
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label>lastname</Label>
              <Input
                placeholder="lastname"
                name="lastName"
                type="text"
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label>email</Label>
              <Input placeholder="email" name="email" type="text" required />
            </InputWrapper>
            <InputWrapper>
              <Label>password</Label>
              <Input
                placeholder="password"
                name="password"
                type="text"
                required
              />
            </InputWrapper>
            <SubmitButton type="submit">Submit</SubmitButton>
          </StyledForm>
        </FormWrapper>
      )}
    </ApolloConsumer>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props =>
    props.loading &&
    "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none"};
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  margin-right: 0px;
  margin-left: auto;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  width: 100%;
`;

// import React, { useContext, useState } from "react";
// import { ApolloConsumer } from "react-apollo";
// import gql from "graphql-tag";
// import Router from "next/router";
// import { Alert } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { observer } from "mobx-react-lite";
// import { UserStoreContext } from "../stores/UserStore.ts";
// import styled from "styled-components";
// import FormWrapper from "./Form2/FormWrapper";

// const LoginForm = observer(() => {
//   const userStore = useContext(UserStoreContext);

//   async function handleSubmit(event, client) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new window.FormData(form);
//     const email = formData.get("email");
//     const password = formData.get("password");
//     console.log(email, password);
//     form.reset();

//     let res = client.mutate({
//       mutation: gql`
//         mutation login($email: String!, $password: String!) {
//           login(email: $email, password: $password)
//         }
//       `,
//       variables: { email, password }
//     });

//     //check if login credentials are correct
//     let r = await res;
//     r = r.data.login;
//     console.log(r);
//     let isTrue = r == "true";
//     if (isTrue == true) {
//       userStore.isAuth = true;
//       Router.push("/dashboard");
//     } else {
//       setWrongCredentials(true);
//       return;
//     }
//   }

//   const [wrongCredentials, setWrongCredentials] = useState(false);

//   return (
//     <ApolloConsumer>
//       {client => (
//         <FormWrapper>
//           <StyledForm onSubmit={event => handleSubmit(event, client)}>
//             <InputWrapper>
//               <Label>email</Label>
//               <Input placeholder="email" name="email" type="text" required />
//             </InputWrapper>
//             <InputWrapper>
//               <Label>password</Label>
//               <Input
//                 placeholder="password"
//                 name="password"
//                 type="text"
//                 required
//               />
//             </InputWrapper>
//             <div style={{ display: "flex", width: "100%" }}>
//               <SubmitButton type="submit">Submit</SubmitButton>
//             </div>
//             {wrongCredentials == true ? (
//               <div className="login-alert">
//                 <Alert
//                   color="secondary"
//                   isOpen={wrongCredentials == true ? true : false}
//                 >
//                   Wrong login credentials
//                 </Alert>
//               </div>
//             ) : null}
//           </StyledForm>
//         </FormWrapper>
//       )}
//     </ApolloConsumer>
//   );
// });

// export default LoginForm;
