import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { AuthContext } from "./Auth"

interface PrivateRouteProps {
  component: any
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: RouteComponent, ...rest }) => {
  const { currentUser }: any = useContext(AuthContext)
  console.log(currentUser)
  return (
    <Route
      {...rest}
      render={(routeProps) => (!!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to="/" />)}
    />
  )
}

export default PrivateRoute
