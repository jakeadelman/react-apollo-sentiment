import App from "../components/App";
import StripeElements from "../components/Stripe/Elements";
import Head from "next/head";
import Header from "../components/Header/Header";

export default function SignUp() {
  return (
    <App>
      <Header />
      <StripeElements />
    </App>
  );
}
