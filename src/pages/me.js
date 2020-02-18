import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Segment, Container, Card, Icon, Image } from "semantic-ui-react"
import Background from "../components/background"
import Profile from "../components/profile"

const me = () => {
  return (
    <Layout>
      <SEO title="me" />
      <Container
        fluid
        style={{
          maxWidth: `1920px`,
        }}
      >
        <Background />
        <Segment.Group
          compact
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Segment basic inverted>
            <Icon size="huge" name="lightbulb outline" color="teal" />
            <h2>Intuitive</h2>
            <p>Small Text</p>
          </Segment>
          <Segment basic inverted>
            <Icon size="huge" name="react" color="teal" />
            <h2>Ever-Evolving</h2>
            <p>Small Text</p>
          </Segment>
          <Segment basic inverted>
            <Icon size="huge" name="rocket" color="teal" />
            <h2>Speed/Performance/Dynamic</h2>
            <p>Small Text</p>
          </Segment>
          <Segment basic inverted>
            <Icon size="huge" name="gem outline" color="teal" />
            <h2>Varied Career</h2>
            <p>Small Text</p>
          </Segment>
        </Segment.Group>

        <Segment.Group style={{ width: "60vw", margin: "auto" }}>
          <Segment inverted compact style={{ width: "250px", margin: "auto" }}>
            <Profile />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              suscipit libero nec velit hendrerit cursus. Ut vestibulum suscipit
              tellus, et sagittis nunc scelerisque nec. In ac fringilla leo,
            </p>
          </Segment>
        </Segment.Group>
      </Container>
    </Layout>
  )
}

export default me
