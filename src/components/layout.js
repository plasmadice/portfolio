import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Segment, Button, Icon } from "semantic-ui-react"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <Container
    fluid
    style={{
      margin: "auto",
      width: "100vw",
      height: "100vh",
      display: "flex",
      backgroundColor: "#1b1c1d",
    }}
  >
    <Helmet>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Helmet>
    {children}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
