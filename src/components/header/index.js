import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.png';

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const Title = styled.h2`
  color: #555;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
  ::after {
    content: "";
    display: block;
    margin: 0 auto;
    height: 2px;
    background-color: #de3e3e;
    width: 130px;
    margin-top: 20px;
  }
`;
const Image = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 32px;
  width: 30px;
  pointer-events: none;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default () => (
  <Header>
    <Image src={logo} alt="app logo"/>
    <Title>TeleCom Number Generator</Title>
  </Header>
);