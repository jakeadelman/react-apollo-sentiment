import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

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

// export default props => {
//   let token = props.token;
//   let newDat;
//   return (
//     <Mutation mutation={confirmUserMutation} variables={{ token }}>
//       {(confirmUser, { data }) => (
//         <ConfirmUser confirm={confirmUser}>
//           <div>thank you for confirming your email</div>
//         </ConfirmUser>
//       )}
//     </Mutation>
//   );
// };

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirmed: false };
    this.userConfirmed = this.userConfirmed.bind(this);
  }

  userConfirmed() {
    this.setState({ confirmed: true });
    Router.push("/login");
  }

  render() {
    let token = this.props.token;
    return (
      <div>
        {this.state.confirmed == false ? (
          <div>
            <Mutation mutation={confirmUserMutation} variables={{ token }}>
              {(confirmUser, { data }) => (
                <ConfirmUser confirm={confirmUser}>
                  <div>thank you for confirming your email</div>
                  <div>{data ? this.userConfirmed() : null}</div>
                </ConfirmUser>
              )}
            </Mutation>
          </div>
        ) : (
          <div>now confirmed</div>
        )}
      </div>
    );
  }
}

/* <div>{JSON.stringify(data)}</div> */

// class Confi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     let dat = JSON.stringify(this.props.data);
//     console.log(dat);
//     dat = JSON.parse(dat);
//     this.setState({ data: dat });
//   }

//   render() {
//     return <div>{this.state.data}</div>;
//   }
// }
