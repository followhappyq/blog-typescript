import React from "react"

import { LongPost } from "../../components"
import { Comments } from "./containers"

interface Props {}

const Post = (props: Props) => {
  return (
    <div>
      <LongPost />
      <Comments />
    </div>
  )
}

export default Post
