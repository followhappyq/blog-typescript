import React from "react"
import { Button, Form, Segment, Header } from "semantic-ui-react"

interface AuthProps {
  header: string
  passwordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  email: string
  password: string
}

const Auth: React.FC<AuthProps> = ({ header, emailHandler, email, passwordHandler, password }) => {
  return (
    <Segment inverted style={{ width: "70%" }}>
      <Header as="h2" textAlign="center">
        {header}
      </Header>
      <Form inverted>
        <Form.Input
          label="Email"
          placeholder="E-mail"
          type="email"
          icon="mail"
          iconPosition="left"
          name="email"
          onChange={emailHandler}
          value={email}
        />
        <Form.Input
          label="Password"
          placeholder="Password"
          type="password"
          icon="lock"
          iconPosition="left"
          name="password"
          onChange={passwordHandler}
          value={password}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  )
}

export default Auth
