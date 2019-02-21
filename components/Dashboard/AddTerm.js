import React, { useState, useEffect } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
// import Popover from "./Popover";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Router from "next/router";

export default function AddTerm(props) {
  const [clicked, setClicked] = useState(false);
  const [popover, setPopover] = useState(false);

  function toggle() {
    if (!popover) {
      setPopover(true);
    } else {
      setPopover(false);
    }
  }

  return (
    <div>
      <button
        id="Popover1"
        onClick={() => {
          setClicked(true);
          toggle();
        }}
      >
        add term
      </button>
      <Popover placement="bottom" isOpen={popover} target="Popover1">
        <PopoverHeader>Add Term</PopoverHeader>
        <PopoverBody>
          <PopBody />
        </PopoverBody>
      </Popover>
    </div>
  );
}

const PopBody = () => {
  const [newTerm, setNewTerm] = useState();
  const [clicked, setClicked] = useState(false);
  console.log(newTerm);

  function handleClick() {
    console.log("was clicked");
    setClicked(true);
    // return <AddTodo term={newTerm} />;
  }

  if (!!clicked) {
    return (
      <Mutation mutation={addSt}>
        {(addSearchTerm, { data }) => {
          setClicked(false);
          addSearchTerm({ variables: { searchterm: newTerm } });
        }}
      </Mutation>
    );
  }

  return (
    <div>
      <AddTodo />
    </div>
  );
};

export const addSt = gql`
  mutation AddSearchTerm($searchterm: String!) {
    addSearchTerm(searchterm: $searchterm)
  }
`;

const AddTodo = () => {
  let input;

  return (
    <Mutation mutation={addSt}>
      {(addSearchTerm, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addSearchTerm({ variables: { searchterm: input.value } });
              input.value = "";
              location.reload(true);
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          {/* <style jsx>
            {`
              .add-button {
                margin-top: 5px;
              }
            `}
          </style> */}
        </div>
      )}
    </Mutation>
  );
};
