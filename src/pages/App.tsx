import React from "react"
import { Switch, Route } from "react-router-dom"

import { Header } from "../containers/"
import { Home } from "./"
import "./app.scss"

const App: React.FC = () => {
  return (
    <div className="blog-main">
      <Header />
      <div className="wrapper-content">
        <Switch>
          <Route exact path={["/"]} component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default App
