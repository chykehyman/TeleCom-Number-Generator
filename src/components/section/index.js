import React from 'react';
import styled from 'styled-components';
import InputSection from './InputSection';
import OutputSection from './OutputSection';

const WholeSection = styled.div`
  max-width: 60%;
  padding: 20px;
  padding-top: 40px;
  margin: 0 auto;
`;

export default () => (
  <WholeSection>
    <InputSection/>
    <OutputSection/>
  </WholeSection>
)