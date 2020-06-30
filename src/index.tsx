import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import "./index.scss"
import store from "./redux/store"
import App from "./pages/App"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
)
