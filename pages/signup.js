import App from "../components/App";
import StripeElements from "../components/Stripe/Elements";
import Head from "next/head";

export default function SignUp() {
  return (
    <App>
      <Head>
        <script src="https://js.stripe.com/v3/" />
      </Head>
      <StripeElements />
    </App>
  );
}
