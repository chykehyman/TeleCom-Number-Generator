import React, {Fragment} from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  outline: none;
  margin-top: 20px;
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

export default () => (
  <Fragment>
    <TextArea placeholder='Output is displayed here' readOnly></TextArea>
    <Button>Export</Button>
  </Fragment>
)