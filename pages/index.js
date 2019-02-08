import App from "../components/App";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default () => (
  <App>
    <Header />
    <div>please proceed to login page</div>
    <div className="display-none">
      <LoginForm />
      <style jsx>
        {`
          .display-none {
            display: none;
          }
        `}
      </style>
    </div>
  </App>
);
