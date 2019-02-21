import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import FacebookProvider from "react-facebook";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook = response => {
    console.log(response);
  };

  render() {
    return (
      <div>
        <div className="facebook-login">
          <FacebookLogin
            appId="353317018730609"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        </div>
        {/* <style jsx>
          {`
            .facebook-login {
              margin: 20px;
            }
          `}
        </style> */}
      </div>
    );
  }
}
