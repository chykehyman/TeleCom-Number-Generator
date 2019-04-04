import React from "react";
import styled from "styled-components";
import { func, string, array } from "prop-types";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

const WholeSection = styled.div`
  max-width: 60%;
  padding: 20px;
  padding-top: 40px;
  margin: 0 auto;
`;

const Section = ({
  handleChange,
  generatePhoneNumbers,
  handleSortChange,
  inputValue,
  phoneNumbers,
  error
}) => (
  <WholeSection>
    <InputSection
      handleChange={handleChange}
      handleSortChange={handleSortChange}
      generatePhoneNumbers={generatePhoneNumbers}
      inputValue={inputValue}
      error={error}
    />
    <OutputSection phoneNumbers={phoneNumbers} />
  </WholeSection>
);

Section.propTypes = {
  handleChange: func.isRequired,
  inputValue: string.isRequired,
  error: string.isRequired,
  phoneNumbers: array.isRequired,
  generatePhoneNumbers: func.isRequired,
  handleSortChange: func.isRequired
};

export default Section;
