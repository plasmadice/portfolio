import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Segment, Button, Icon } from "semantic-ui-react"
import { Helmet } from "react-helmet"
import ButtonFooter from "./ButtonFooter"

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
      justifyContent: "space-between",
    }}
  >
    <Helmet>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Helmet>
    {children}
    <ButtonFooter />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
