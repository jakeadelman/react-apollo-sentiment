import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import InjectedCheckoutForm from "./CheckoutForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { stripe: null };
  }
  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)
    this.setState({
      stripe: window.Stripe("pk_test_0O8JLNYf87Oky33vn38yNi4i")
    });
  }
  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}
