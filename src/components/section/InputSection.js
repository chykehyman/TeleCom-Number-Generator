import React, { Fragment } from "react";
import styled from "styled-components";
import { func, string } from "prop-types";

const Input = styled.input`
  outline: none;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  box-shadow: 5px 5px 5px #aaaaaa;
  color: #555;
  border: none;
  padding: 10px;
`;

const Button = styled.button`
  border: 1px solid #de3e3e;
  border-radius: 20px;
  color: #de3e3e;
  background-color: white;
  cursor: pointer;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
  width: 150px;
  text-transform: uppercase;
  margin-left: 10px;
  &:hover {
    background-color: #de3e3e;
    color: white;
  }
  margin-right: 10px;
  outline: none;
`;

const Select = styled.select`
  outline: none;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
`;

const ErrorDiv = styled.div`
  color: red;
  margin: 10px 0 0;
  font-style: italic;
  font-size: 13px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

const InputSection = ({
  handleChange,
  inputValue,
  error,
  generatePhoneNumbers,
  handleSortChange
}) => (
  <Fragment>
    <Wrapper>
      <Input
        type="number"
        placeholder="enter number here..."
        value={inputValue}
        onChange={handleChange}
      />
      <Button onClick={generatePhoneNumbers}>Generate</Button>
      <Select defaultValue="default" onChange={handleSortChange}>
        <option value="default" disabled>
          Sort By
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </Wrapper>
    {error && <ErrorDiv>{error}</ErrorDiv>}
  </Fragment>
);

InputSection.propTypes = {
  handleChange: func.isRequired,
  inputValue: string.isRequired,
  error: string.isRequired,
  generatePhoneNumbers: func.isRequired,
  handleSortChange: func.isRequired
};

export default InputSection;
