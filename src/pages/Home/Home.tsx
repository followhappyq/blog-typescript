import React from "react"
import { Container } from "semantic-ui-react"

import { LongPostList } from "./containers"
import "./home.scss"

const Home: React.FC = () => {
  return (
    <Container>
      <LongPostList />
    </Container>
  )
}

export default Home
