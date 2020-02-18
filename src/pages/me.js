import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Segment } from "semantic-ui-react"

const me = () => {
  return (
    <Layout>
      <SEO title="me" />
      <Segment.Group style={{ margin: "auto" }}>
        <Segment>
          <p>Words go here</p>
        </Segment>
      </Segment.Group>
    </Layout>
  )
}

export default me
