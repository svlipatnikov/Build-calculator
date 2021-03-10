/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/Header/Header';

const Page = ({ children }) => (
  <>
    <Header />
    <Container className="container" maxWidth="lg">
      {children}
    </Container>
  </>
);

export default Page;
