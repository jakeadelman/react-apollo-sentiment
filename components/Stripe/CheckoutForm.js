// CheckoutForm.js
import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
// import AddressSection from "./AddressSection";
import CardSection from "./CardSection";
import styled from "styled-components";
import Button from "../shared/Button";
import FormWrapper from "../Form2/FormWrapper";
const Cookie = require("js-cookie");

function CheckoutForm({ stripe }) {
  function handleSubmit(ev, client) {
    ev.preventDefault();
    let source;
    let uid = Cookie.get("uid");
    stripe
      .createSource({
        type: "card",
        owner: { email: "jacobzadelman@gmail.com" }
      })
      .then(({ source }) => {
        return source.id.toString();
      })
      .then(async source => {
        console.log(uid, source);
        console.log(typeof source);
        console.log(typeof source);

        await client
          .mutate({
            mutation: gql`
              mutation confCard($uid: String!, $source: String!) {
                confirmCard(uid: $uid, source: $source)
              }
            `,
            variables: { uid, source }
          })
          .then(res => console.log(res));
      });
  }

  return (
    <ApolloConsumer>
      {client => (
        <FormWrapper>
          <StyledForm onSubmit={e => handleSubmit(e, client)}>
            <label style={{ width: "100%" }}>
              <CardElement style={{ base: { fontSize: "18px" } }} />
            </label>
            <Button>Start your free trial</Button>
          </StyledForm>
        </FormWrapper>
      )}
    </ApolloConsumer>
  );
}

export default injectStripe(CheckoutForm);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
