import React from "react"
import { Comment } from "semantic-ui-react"

interface BaseCommentProps {
  imageUrl: string
  author: string
  time: string
  text: string
}

const BaseComment: React.FC<BaseCommentProps> = ({ imageUrl, author, time, text }) => {
  return (
    <Comment>
      <Comment.Avatar src={imageUrl} />
      <Comment.Content>
        <Comment.Author as="a" className="comments__author">
          {author}
        </Comment.Author>
        <Comment.Metadata>
          <div className="comments__time">{time}</div>
        </Comment.Metadata>
        <Comment.Text className="comments__text">{text}</Comment.Text>
        <Comment.Actions>
          <Comment.Action className="comments__actions">Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  )
}

export default BaseComment
