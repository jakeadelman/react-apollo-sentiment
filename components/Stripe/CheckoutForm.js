// CheckoutForm.js
import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Button from "../shared/Button";
import FormWrapper from "../Form2/FormWrapper";
import { smallFont } from "../shared/helpers";
import register from "../../pages/register";
import { removeArgumentsFromDocument } from "apollo-utilities";
import Router from "next/router";
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
        await client
          .mutate({
            mutation: gql`
              mutation confCard($uid: String!, $source: String!) {
                confirmCard(uid: $uid, source: $source)
              }
            `,
            variables: { uid, source }
          })
          .then(res => {
            Cookie.set("isAuth", "true");
            Router.push("/dashboard");
          });
      });
  }

  return (
    <ApolloConsumer>
      {client => (
        <FormWrapper style={{ marginTop: "20vw" }}>
          <StyledForm onSubmit={e => handleSubmit(e, client)}>
            <label style={{ width: "100%" }}>
              <CardElement style={{ base: { fontSize: "18px" } }} />
            </label>
            <div style={{ display: "flex", width: "100%" }}>
              <SubmitButton>Start your free trial</SubmitButton>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <NoteDiv>*free for 7 days then $29USD/month</NoteDiv>
            </div>
          </StyledForm>
        </FormWrapper>
      )}
    </ApolloConsumer>
  );
}

export default injectStripe(CheckoutForm);

const NoteDiv = styled.div`
  ${smallFont}
  font-size: 11px;
  margin: auto;
  margin-top: 7px;
`;

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
  margin: auto;
  margin-top: 20px;
  background-color: #333333;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
  width: 100%;
`;
