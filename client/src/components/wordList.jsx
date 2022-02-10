import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import WordTable from "./wordTable";

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

  // This following section will display the table with the words.
  render() {
    return (
      <WordTable words={this.state.words} deleteWord={this.deleteWord}/>
    );
  }
}