import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

const Word = (props) => (
  <tr>
    <td>{props.word.Text}</td>
    <td>{props.word.Title}</td>
    <td>{props.word.Author}</td>
    <td>{props.word.Date}</td>
    <td>{props.word.Time}</td>
    {/* <td>
      <Link to={"/edit/" + props.word._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteWord(props.word._id);
        }}
      >
        Delete
      </a>
    </td> */}
  </tr>
);

export default class WordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteWord = this.deleteWord.bind(this);
    this.state = { words: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/word/")
      .then((response) => {
        this.setState({ words: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a word based on the method
  deleteWord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      word: this.state.words.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  wordList() {
    return this.state.words.map((currentword) => {
      return (
        <Word
          word={currentword}
          deleteWord={this.deleteWord}
          key={currentword._id}
        />
      );
    });
  }

  // This following section will display the table with the words.
  render() {
    return (
      <div>
        <h3>Word List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Text</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{this.wordList()}</tbody>
        </table>
      </div>
    );
  }
}