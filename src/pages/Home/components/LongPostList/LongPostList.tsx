import React from "react"

import { LongPost } from "../"
import "./longPostList.scss"

interface Props {}

const LongPostList = (props: Props) => {
  return (
    <div className="long-post">
      <LongPost />
    </div>
  )
}

export default LongPostList
