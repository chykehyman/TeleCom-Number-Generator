import React from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

export default () => (
  <Wrapper>
    <Input type="number" placeholder="enter number here..." readonly/>
    <Button>Generate</Button>
    <Select>
     <option value="asc">Ascending</option>
     <option value="desc">Descending</option>
    </Select>
  </Wrapper>
)