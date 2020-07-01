import React from "react"

import { Auth } from "../../../components"

interface Props {}

const SignUpForm: React.FC = (props: Props) => {
  const formConfig: { label: string; placeholder: string; type: string; icon: string; name: string }[] = [
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
  return <Auth header="Create new account" formConfig={formConfig} />
}

export default SignUpForm
