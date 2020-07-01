import React from "react"
import { Button, Form, Segment, Header } from "semantic-ui-react"

interface AuthProps {
  header: string
  formConfig: { label: string; placeholder: string; type: string; icon: string; name: string }[]
}

const Auth: React.FC<AuthProps> = ({ header, formConfig }) => {
  return (
    <Segment inverted style={{ width: "70%" }}>
      <Header as="h2" textAlign="center">
        {header}
      </Header>
      <Form inverted>
        {formConfig.map((item) => (
          <Form.Input
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
            icon={item.icon}
            iconPosition="left"
            name={item.name}
          />
        ))}
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  )
}

export default Auth
