import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Button from "../shared/Button";

const confirmUserMutation = gql`
  mutation confirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;

class ConfirmUser extends React.Component {
  componentDidMount() {
    this.props.confirm();
  }

  render() {
    return this.props.children;
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirmed: false };
    this.userConfirmed = this.userConfirmed.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    Router.push("/login");
  }

  userConfirmed() {
    this.setState({ confirmed: true });
    // Router.push("/login");
  }

  render() {
    let token = this.props.token;
    if (token == undefined) {
      return (
        <div style={{ fontSize: "14px" }}>
          We've sent you an email. Please confirm your email to login.
        </div>
      );
    }
    return (
      <div>
        {this.state.confirmed == false ? (
          <div>
            <Mutation mutation={confirmUserMutation} variables={{ token }}>
              {(confirmUser, { data }) => (
                <ConfirmUser confirm={confirmUser}>
                  <div>{data ? this.userConfirmed() : null}</div>
                </ConfirmUser>
              )}
            </Mutation>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: "14px" }}>
              Thank you for confirming your email. You may now login.
            </div>
            <div style={{ display: "flex", marginTop: "12px" }}>
              <Button
                style={{ marginRight: "auto", marginLeft: "auto" }}
                onClick={this.buttonClicked}
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
