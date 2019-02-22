import React, { useContext, useState } from "react";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../stores/UserStore.ts";

const LoginForm = observer(() => {
  const userStore = useContext(UserStoreContext);

  async function handleSubmit(event, client) {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    form.reset();

    let res = client.mutate({
      mutation: gql`
        mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password)
        }
      `,
      variables: { email, password }
    });

    //check if login credentials are correct
    let r = await res;
    r = r.data.login;
    let isTrue = r == "true";
    if (isTrue == true) {
      userStore.isAuth = true;
      Router.push("/dashboard");
    } else {
      setWrongCredentials(true);
      return;
    }
  }

  const [wrongCredentials, setWrongCredentials] = useState(false);

  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <h1>Login</h1>
          <input placeholder="email" name="email" type="text" required />
          <input placeholder="password" name="password" type="text" required />
          <button type="submit">Submit</button>
          {wrongCredentials == true ? (
            <div className="login-alert">
              <Alert
                color="secondary"
                isOpen={wrongCredentials == true ? true : false}
              >
                Wrong login credentials
              </Alert>
            </div>
          ) : null}
        </form>
      )}
    </ApolloConsumer>
  );
});

export default LoginForm;
