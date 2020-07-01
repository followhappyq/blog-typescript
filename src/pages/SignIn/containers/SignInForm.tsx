import React from "react"

import { Auth } from "../../../components"

interface Props {}

const SignInForm: React.FC = (props: Props) => {
  const formConfing: { label: string; placeholder: string; type: string; icon: string; name: string }[] = [
    {
      label: "Email",
      placeholder: "Email",
      type: "email",
      icon: "mail",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "Password",
      type: "password",
      icon: "lock",
      name: "password",
    },
  ]
  return <Auth header="Log-in to your account" formConfig={formConfing} />
}

export default SignInForm
