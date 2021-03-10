import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/Header';

const Page = props => (
  <>
    <Header />
    <Container className="container" maxWidth="lg">
      {props.children}
    </Container>
  </>
);

export default Page;