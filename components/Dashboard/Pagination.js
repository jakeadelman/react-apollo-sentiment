import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import Link from "next/link";
import Router from "next/router";
// {`/dashboard?term=${props.searchterm}`
function PostLink(props) {
  const [term, setTerm] = useState(props.searchterm);
  const [link, setLink] = useState(props.link);

  return (
    <a onClick={() => Router.push(link)}>
      <PaginationLink>{term}</PaginationLink>
    </a>
  );
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { terms: [] };
  }

  render() {
    let count = 0;
    if (!this.state.terms[0]) {
      this.setState({ terms: this.props.searchterms });
      console.log(this.state.terms.length);
      console.log(this.props);
    }
    return (
      <Pagination aria-label="Page navigation example">
        {console.log(this.state.terms.length)}
        {this.state.terms.map(termo => {
          console.log(termo);
          let link = "/dashboard?term=" + termo;
          console.log(link);
          count += 1;
          return (
            <PaginationItem key={count - 1}>
              <PostLink searchterm={termo} link={link} />
            </PaginationItem>
          );
        })}
      </Pagination>
    );
  }
}

// <PaginationItem>
//             <PostLink searchterm={termo} />
//           </PaginationItem>;
