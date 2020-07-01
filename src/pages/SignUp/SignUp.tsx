import React from "react"

import { SignUpForm } from "./containers"
import "./signup.scss"

interface Props {}

const SignUp: React.FC = (props: Props) => {
  return (
    <div className="signup">
      <SignUpForm />
    </div>
  )
}

export default SignUp
