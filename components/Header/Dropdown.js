import React from "react";
import RegisterForm from "../RegisterForm";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import { smallFont } from "../shared/helpers";
import Link from "next/link";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false
    };
    this.toggleList = this.toggleList.bind(this);
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    });
  }
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }
  render() {
    const { list } = this.props;
    const { listOpen } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <StyledLink onClick={() => this.toggleList()}>
          <div className="dd-header-title">settings</div>
          {listOpen ? (
            <FontAwesome name="angle-up" size="2x" />
          ) : (
            <FontAwesome name="angle-down" size="2x" />
          )}
        </StyledLink>
        {listOpen && (
          <DropdownDiv>
            <DropdownListItem>account</DropdownListItem>
            <Link prefetch href="/logout">
              <DropdownListItem>logout</DropdownListItem>
            </Link>
          </DropdownDiv>
        )}
      </div>
    );
  }
}

const DropdownListItem = styled.div`
  ${smallFont}
  padding: 16px;
`;

const DropdownDiv = styled.div`
  position: absolute;
  display: block;
  background-color: ${props => props.theme.foreground};
  margin-top: 45px;
  border: 1px solid ${props => props.theme.border};
  border-top: none;
`;

const StyledLink = styled.div`
  margin: auto 10px;
  color: ${props => props.theme.mutedText};

  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-bottom: 1px solid ${props => props.theme.accent};
  }

  :hover {
    opacity: 1;
    color: ${props => props.theme.accent};
  }

  &.active::after {
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 3px solid ${props => props.theme.accent};
  }
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 12px;
  text-transform: uppercase;
`;
