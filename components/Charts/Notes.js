import { Component } from "react";
import styled from "styled-components";
import { ApolloConsumer } from "react-apollo";
import { getNotes, getHashtags } from "./helpers";
import gql from "graphql-tag";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", hashtags: [], initHashtags: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.firstTrade.notes
    });
    let splitTags = this.props.firstTrade.hashtags.split(",");
    splitTags.map(tag => {
      this.state.initHashtags.push(tag);
    });
  }

  handleChange(client) {
    return event => {
      // event.preventDefault();
      this.setState({ value: event.target.value }, this.handleSubmit(client));
    };
  }

  handleSubmit(client) {
    return event => {
      if (event != undefined && event.preventDefault != undefined) {
        event.preventDefault();
      }
      // alert("A name was submitted: " + this.state.value);
      // let splitted = this.state.value.split(" ");
      // for (let i = 0; i < splitted.length; i++) {
      //   if (splitted[i].includes("#")) {
      //     this.state.hashtags.push(splitted[i]);
      //   }
      //   if (i == splitted.length - 1) {
      console.log("HASHTAGS", this.state.hashtags);
      getNotes(this.state.value).then(async res => {
        let notes = res[0];
        // let hashtags = res[1];
        let time = this.props.firstTrade.timestamp;
        let reso = client.mutate({
          mutation: gql`
            mutation addNotes($time: String!, $notes: String!) {
              addNotes(time: $time, notes: $notes)
            }
          `,
          variables: { time, notes }
        });

        let r = await reso;
        console.log(r);
      });
    };
  }
  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {/* <FullRow> */}
            <FullRow onSubmit={this.handleSubmit(client)}>
              <HashtagDiv>
                <AddHashtag
                  firstTrade={this.props.firstTrade}
                  client={client}
                />
              </HashtagDiv>
              {this.state.initHashtags.map(tag => {
                return <SingleHashtagDiv>#{tag}</SingleHashtagDiv>;
              })}
              <NotesInput
                type="text"
                value={this.state.value}
                onChange={this.handleChange(client)}
              ></NotesInput>
            </FullRow>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

class AddHashtag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ client: this.props.client });
  }

  handleChange(event) {
    // event.preventDefault();
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    // return event => {
    event.preventDefault();
    getHashtags(this.state.value).then(async res => {
      console.log("CLICKED");
      let client = this.state.client;
      let hashtag = res[0];
      let time = this.props.firstTrade.timestamp;
      let reso = client.mutate({
        mutation: gql`
          mutation addHashtag($time: String!, $hashtag: String!) {
            addHashtag(time: $time, hashtag: $hashtag)
          }
        `,
        variables: { time, hashtag }
      });

      return await reso;
    });
    // };
  }

  render() {
    return (
      // <ApolloConsumer>
      //   {client => (
      <div>
        <Dropdown
          direction="right"
          style={{ backgroudColor: "#fff", color: "#fff" }}
          isOpen={this.state.btnDropright}
          toggle={() => {
            this.setState({ btnDropright: !this.state.btnDropright });
          }}
        >
          <DropdownToggle style={{ backgroudColor: "#000000", color: "#fff" }}>
            +
          </DropdownToggle>
          <DropdownMenu style={{ backgroudColor: "#000000", color: "#fff" }}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input type="submit" value="Submit" />
            </form>
          </DropdownMenu>
        </Dropdown>
      </div>
      // )} //{" "}
      // </ApolloConsumer>
    );
  }
}

// background: #6c757d;
const SingleHashtagDiv = styled.div`
  background: #b9bdc1;
  margin: 20px 8px;
  text-align: center;
  vertical-align: middle;
  color: black;
  padding: 10px;
  padding-top: 8px;
`;
const HashtagDiv = styled.div`
  margin: auto;
  text-align: center;
  vertical-align: middle;
  color: white;
  padding: 10px;
  padding-top: 8px;
`;

const FullRow = styled.form`
  display: flex;
  flex-direction: row;
`;

const NotesSubmit = styled.input`
  margin: 9px;
  padding: 15px;
  background: #212528;
  border: none;
  color: white;
`;

const NotesInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background: #f8f8ff;
  border: none;
`;
