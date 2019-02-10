const Content = withRouter(props => (
  <div>
    <MainDiv searchterm={props.router.query.term} by={props.router.query.by} />
  </div>
));

const Page = props => (
  <MainLayout>
    <Content />
  </MainLayout>
);

export default Page;

/* <Pagination
searchterm={props.router.query.term}
by={props.router.query.by}
/> */
