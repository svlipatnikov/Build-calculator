import React from 'react'
import { Container } from '@material-ui/core'
import Header from '../components/Header/Header'

const Page = props => (
  <>
    <Header />
    <Container className="container">
      {props.children}
    </Container>
  </>
)

export default Page