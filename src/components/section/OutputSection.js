import React, { Fragment } from "react";
import styled from "styled-components";
import { array } from "prop-types";
import saveAs from "file-saver";

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
  margin: 14px 0 0 0;
  outline: none;
`;
const TableArea = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 20px;
  border: 2px solid #555;
  box-shadow: 5px 5px 5px #aaaaaa;
  table {
    width: inherit;
    text-align: left;
    border-collapse: collapse;
    thead {
      background-color: #555;
      color: white;
    }
    td,
    th {
      padding: 10px;
    }
  }
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

const calculateMinMax = phoneNumbers => {
  const min = Math.min(...phoneNumbers);
  const max = Math.max(...phoneNumbers);
  const total = phoneNumbers.length;

  return { min, max, total };
};

const displayTable = phoneNumbers => {
  const { min, max, total } = calculateMinMax(phoneNumbers);
  return (
    <table>
      <thead>
        <tr>
          <th>Min Number</th>
          <th>Max Number</th>
          <th>Total Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0{min}</td>
          <td>0{max}</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

const savePhoneNumbers = (phoneNumbers) => {
  const file = new File([phoneNumbers], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(file, "phone-numbers.txt");
};

const OutPutSection = ({ phoneNumbers }) => {
  return (
    <Fragment>
      <TextArea readOnly>{displayNumbers(phoneNumbers)}</TextArea>
      {phoneNumbers.length > 0 && (
        <Fragment>
          <Button className="yea" onClick={() => savePhoneNumbers(phoneNumbers)}>Export</Button>
          <TableArea>{displayTable(phoneNumbers)}</TableArea>
        </Fragment>
      )}
    </Fragment>
  );
};

OutPutSection.propTypes = {
  phoneNumbers: array.isRequired
};

export default OutPutSection;
