import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import { allPostsQuery, allPostsQueryVars } from "./PostList";
import Input from "./Form2/Input";
import Label from "./form/Label";
import Button from "./shared/Button";
import FormWrapper from "./Form2/FormWrapper";
import styled from "styled-components";
import { removeArgumentsFromDocument } from "apollo-utilities";
import Router from "next/router";
const Cookie = require("js-cookie");

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

    client
      .mutate({
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
      })
      .then(response => {
        if (response.data) {
          Cookie.set("uid", response.data.register.id);
          Router.push("/signup");
        } else {
          console.log("there was an error");
        }
      });
  }

  return (
    <ApolloConsumer>
      {client => (
        <FormWrapper>
          <StyledForm onSubmit={event => handleSubmit(event, client)}>
            <InputWrapper>
              <Label>firstname</Label>
              <Input placeholder="" name="firstName" type="text" required />
            </InputWrapper>
            <InputWrapper>
              <Label>lastname</Label>
              <Input placeholder="" name="lastName" type="text" required />
            </InputWrapper>
            <InputWrapper>
              <Label>email</Label>
              <Input placeholder="" name="email" type="text" required />
            </InputWrapper>
            <InputWrapper>
              <Label>password</Label>
              <Input placeholder="" name="password" type="text" required />
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
