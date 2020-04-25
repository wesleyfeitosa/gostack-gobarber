import React from 'react';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
    </Content>
    <Background />
  </Container>
);

export default Signin;
