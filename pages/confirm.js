import { withRouter } from "next/router";
import ConfirmUser from "../components/ConfirmUser";

const Content = withRouter(props => (
  <div>
    <ConfirmUser token={props.router.query.id} />
  </div>
));

const Page = props => (
  <div>
    <Content />
  </div>
);

export default Page;
