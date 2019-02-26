// CheckoutForm.js
import React from "react";
import { injectStripe } from "react-stripe-elements";

import AddressSection from "./AddressSection";
import CardSection from "./CardSection";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    this.props.stripe.createToken({ name: "Jenny Rosen" }).then(({ token }) => {
      console.log("Received Stripe token:", token);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
