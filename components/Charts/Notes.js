import { Component } from "react";
import styled from "styled-components";

export default class extends Component {
  render() {
    return <NotesInput></NotesInput>;
  }
}

const NotesInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background: #f8f8ff;
  border: none;
`;
