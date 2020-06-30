import React from "react"
import { Switch, Route } from "react-router-dom"
import { Container } from "semantic-ui-react"

import { Header } from "../containers/"
import { Home, Post } from "./"
import "./app.scss"

const App: React.FC = () => {
  return (
    <div className="blog-main">
      <Header />
      <div className="wrapper-content">
        <Container className="post__container">
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/post"]} component={Post} />
          </Switch>
        </Container>
      </div>
    </div>
  )
}

export default App
