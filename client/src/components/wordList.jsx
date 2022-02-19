import React, { Component } from "react";
import axios from 'axios';
import WordTable from "./wordTable";

export default class WordList extends Component {
  constructor(props) {
    super(props);
    this.deleteWord = this.deleteWord.bind(this);
    this.state = { words: [] };
  }

  componentDidMount() {
    axios
      .get("https://mywords-extended-functionality.herokuapp.com/word")
      .then((response) => {
        this.setState({ words: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteWord(id) {
    axios.delete("https://mywords-extended-functionality.herokuapp.com/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      word: this.state.words.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <WordTable words={this.state.words} deleteWord={this.deleteWord}/>
    );
  }
}