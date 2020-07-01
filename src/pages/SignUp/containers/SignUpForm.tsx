import React, { useState } from "react"

import { Auth } from "../../../components"

interface Props {}

const SignUpForm: React.FC = (props: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  return (
    <Auth
      header="Create new account"
      emailHandler={onEmailChange}
      email={email}
      passwordHandler={onPasswordChange}
      password={password}
    />
  )
}

export default SignUpForm
