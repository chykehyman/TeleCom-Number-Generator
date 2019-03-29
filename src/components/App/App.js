import React from 'react';
import styled from 'styled-components';
import Header from '../header/index';
import Section from '../section';

const App = styled.div`
  background-color: #dde;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
`;

export default () => (
  <App>
    <Header />
    <Section/>
  </App>
);