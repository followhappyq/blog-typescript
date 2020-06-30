import React from "react"
import { Button, Comment, Form, Header, Container } from "semantic-ui-react"

import { Comment as BaseComment } from "../"

import "./comments.scss"

interface Props {}

const Comments = (props: Props) => {
  const user = {
    imageUrl: "https://sun9-57.userapi.com/c831409/v831409990/1a79ac/NVoePCGIUL0.jpg?ava=1",
    author: "Nik Yarmak",
    time: "Just now",
    text: "Elliot you are always so right :)",
  }

  return (
    <Container className="comments-container">
      <Comment.Group>
        <Header as="h3" dividing className="comments__header">
          Comments
        </Header>
        <BaseComment imageUrl={user.imageUrl} author={user.author} time={user.time} text={user.text} />
        <BaseComment imageUrl={user.imageUrl} author={user.author} time={user.time} text={user.text} />
        <BaseComment imageUrl={user.imageUrl} author={user.author} time={user.time} text={user.text} />
        <BaseComment imageUrl={user.imageUrl} author={user.author} time={user.time} text={user.text} />

        <Form reply>
          <Form.TextArea />
          <Button content="Add Reply" labelPosition="left" icon="edit" primary />
        </Form>
      </Comment.Group>
    </Container>
  )
}

export default Comments
