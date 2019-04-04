import React, { Fragment } from "react";
import styled from "styled-components";
import { array } from "prop-types";

const TextArea = styled.div`
  outline: none;
  margin-top: 20px;
  padding: 10px 5px;
  overflow: auto;
  width: 100%;
  height: 300px;
  background-color: white;
  font-size: 16px;
  font-family: monospace;
  border: none;
  color: #555;
  resize: none;
  box-shadow: 5px 5px 5px #aaaaaa;
`;
const Button = styled.button`
  border: 1px solid #de3e3e;
  border-radius: 20px;
  background-color: #de3e3e;
  color: white;
  cursor: pointer;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
  width: 150px;
  text-transform: uppercase;
  margin-left: 10px;
  &:hover {
    color: white;
    background-color: #de3e5f;
  }
  margin: 10px 0 0 0;
  outline: none;
`;

const displayNumbers = phoneNumbers => {
  const amountGenerated = phoneNumbers.length;
  if (amountGenerated === 0)
    return (
      <span style={{ fontSize: "20px" }}>
        No numbers have been generated yet
      </span>
    );
  return phoneNumbers.map((number, index) => (
    <span key={index}>
      {number}
      {index < amountGenerated - 1 && ", "}
    </span>
  ));
};

const OutPutSection = ({ phoneNumbers }) => {
  return (
    <Fragment>
      <TextArea readOnly>{displayNumbers(phoneNumbers)}</TextArea>
      <Button>Export</Button>
    </Fragment>
  );
};

OutPutSection.propTypes = {
  phoneNumbers: array.isRequired
};

export default OutPutSection;
