import React, { useState, useEffect } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
// import Popover from "./Popover";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

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
        <PopoverHeader>Popover Title</PopoverHeader>
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
      <Mutation mutation={addSearchTermQuery}>
        {(addSearchTerm, { data }) => {
          setClicked(false);
          addSearchTerm({ variables: { searchterm: newTerm } });
        }}
      </Mutation>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter term to add"
        onChange={e => setNewTerm(e.target.value)}
      />
      <button onClick={() => handleClick()}>submit</button>
    </div>
  );
};

const AddTodo = props => {
  return (
    <Mutation mutation={addSearchTermQuery}>
      {(addSearchTerm, { data }) =>
        addSearchTerm({ variables: { searchterm: props.term } })
      }
    </Mutation>
  );
};

export const addSearchTermQuery = gql`
  mutation AddSearchTerm($searchterm: String!) {
    addSearchTerm(searchterm: $searchterm)
  }
`;

/* <Query query={fetchTweetsQuery}>
          {({ loading, error, data }) => {
            if (error) return <div>no data loaded</div>;
            if (loading) return <div>Loading</div>;
            console.log(data);
            return (
              <div>
                <Popover placement="bottom">
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </PopoverBody>
                </Popover>
              </div>
            );
          }}
        </Query> */

// const AfterClickTry = () => (
//   <div>
//     <div>fuck yall</div>
//     {console.log("fuck")}
//   </div>
// );

// function AfterClick() {
//   return (
//     <Query query={fetchTweetsQuery}>
//       {({ loading, error, data }) => {
//         if (error) return <div>no data loaded</div>;
//         if (loading) return <div>Loading</div>;
//         console.log(data);
//         return (
//           <div>
//             <div className="dash-main-table">
//               <div>clicky bro</div>
//               <style jsx>
//                 {`
//                   .dash-main-table {
//                     max-width: 50%;
//                     margin: 3em auto 3em auto;
//                   }
//                 `}
//               </style>
//             </div>
//           </div>
//         );
//       }}
//     </Query>
//   );
// }
