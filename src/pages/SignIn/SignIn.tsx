import React from "react"

import { SignInForm } from "./containers/"
import "./signin.scss"

interface Props {}

const SignIn = (props: Props) => {
  return (
    <div className="signin">
      <SignInForm />
    </div>
  )
}

export default SignIn
