import React from "react"

import { Header as BaseHeader } from "../../components/"

interface Props {}

declare var confirm: (question: string) => boolean

const Header = (props: Props) => {
  const onMailClick = () => {
    if (confirm("Are you want to send mail  for me ?")) {
      window.open("mailto:ivandubovtsov@gmail.com")
    }
  }

  return <BaseHeader onMailClick={onMailClick} />
}

export default Header
