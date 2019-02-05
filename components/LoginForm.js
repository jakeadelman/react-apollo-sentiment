import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wrongCredentials: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event, client) {
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

    let r = await res;
    console.log(r);
    r = r.data.login;
    console.log(r);
    let isTrue = r == "true";
    console.log(typeof r);
    if (isTrue == true) {
      console.log(r);
      Router.push("/dashboard");
    } else {
      this.setState({ wrongCredentials: true });
      return;
    }
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <form onSubmit={event => this.handleSubmit(event, client)}>
            <h1>Login</h1>
            <input placeholder="email" name="email" type="text" required />
            <input
              placeholder="password"
              name="password"
              type="text"
              required
            />
            <button type="submit">Submit</button>
            {this.state.wrongCredentials == true ? (
              <div className="login-alert">
                <Alert
                  color="secondary"
                  isOpen={this.state.wrongCredentials == true ? true : false}
                >
                  Wrong login credentials
                </Alert>
              </div>
            ) : null}
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
              .login-alert {
                max-width: 22em;
                margin-top: 2em;
              }
            `}</style>
          </form>
        )}
      </ApolloConsumer>
    );
  }
}
