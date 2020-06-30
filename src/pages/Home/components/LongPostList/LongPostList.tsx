import React from "react"

import { LongPost } from "../../../../components"
import "./longPostList.scss"

interface Props {}

const LongPostList = (props: Props) => {
  return (
    <div className="long-post">
      <LongPost />
      <LongPost />
      <LongPost />
      <LongPost />
    </div>
  )
}

export default LongPostList
