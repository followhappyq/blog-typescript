import React from "react"
import { Image } from "semantic-ui-react"

interface Props {}

const LongPost = (props: Props) => {
  return (
    <div className="post">
      <div className="post__title">Hire me</div>
      <Image
        src="https://images.unsplash.com/photo-1587486520366-a52810770560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        alt="image-description"
      />
      <div className="post__audio"></div>
      <div className="post__text"></div>
      <div className="post__footer">
        <div className="post__footer-top">
          <div className="post__author"></div>
          <div className="post__count"></div>
        </div>
        <div className="post__footer-bottom">
          <div className="post__continue"></div>
        </div>
      </div>
    </div>
  )
}

export default LongPost
