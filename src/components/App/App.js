import React, { Component } from "react";
import styled from "styled-components";
import Header from "../header/index";
import Section from "../section";

const App = styled.div`
  background-color: #dde;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
`;

export default class TeleApp extends Component {
  state = {
    inputValue: "",
    phoneNumbers: [],
    error: "",
    sortValue: "asc"   
  };

  handleOnChange = event => {
    const { value } = event.target;
    this.setState({
      inputValue: value
    });
  };
  validateInput = () => {
    const { inputValue } = this.state;
    let errorMessage = "";
    if (inputValue <= 0 || inputValue >= 10000) {
      errorMessage = "enter a number less than 10,000 but greater than 0";
    }
    return errorMessage;
  };
  handleGeneratePhoneNumbers = event => {
    const error = this.validateInput();

    event.preventDefault();
    if (!error) {
      let counter = 0;
      let generatedNumbers = [];
      const generatedNumber = () =>
        "0" + Math.floor(Math.random() * 900000000 + 100000000);
      while (counter < this.state.inputValue) {
        generatedNumbers.push(generatedNumber());
        counter++;
      }
      this.setState({
        phoneNumbers: generatedNumbers,
        inputValue: ""
      });
    }
    this.setState({ error });
  };

  handleSortChange = event => {
    event.preventDefault();
    this.setState(
      {
        sortValue: event.target.value
      },
      () => this.handlePhoneNumberSort()
    );
  };

  handlePhoneNumberSort = () => {
    const { sortValue, phoneNumbers } = this.state;
    let sortedPhoneNumbers;
    if (sortValue === "asc") {
      sortedPhoneNumbers = phoneNumbers.sort((a, b) => a - b);
    } else {
      sortedPhoneNumbers = phoneNumbers.sort((a, b) => b - a);
    }
    this.setState({
      phoneNumbers: sortedPhoneNumbers
    });
  };
  render() {
    const state = this.state;
    return (
      <App>
        <Header />
        <Section
          handleChange={this.handleOnChange}
          generatePhoneNumbers={this.handleGeneratePhoneNumbers}
          handleSortChange={this.handleSortChange}
          {...state}
        />
      </App>
    );
  }
}
