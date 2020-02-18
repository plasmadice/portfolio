import React from "react"
import { Button } from "semantic-ui-react"
import { navigate, Link } from "gatsby"

const ButtonFooter = () => {
  return (
    <Button.Group color="orange">
      <Button onClick={() => navigate("/me")}>Me</Button>
      <Button>Work</Button>
      <Button onClick={() => navigate("/")}>Why tho?</Button>
    </Button.Group>
  )
}

export default ButtonFooter
