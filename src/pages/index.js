import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Segment, Button, Icon } from "semantic-ui-react"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Herman White - JavaScript Developer" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//   </Layout>
// )
const IndexPage = () => (
  <Layout>
    <SEO title="Herman White - JavaScript Developer" />

    <Segment inverted raised style={{ margin: "auto", textAlign: "center" }}>
      <h1>Hello, I'm Herman White.</h1>
      <h2>I'm a JavaScript Developer.</h2>
      <Button basic inverted icon labelPosition="right">
        View My Work
        <Icon name="angle right" />
      </Button>
    </Segment>
  </Layout>
)

export default IndexPage
