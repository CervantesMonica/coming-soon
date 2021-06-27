import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import UnderConstructionGIF from "../images/underconstruction.gif"
import Logo from "../images/logo.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div class="logo-wrapper">
      <img src={Logo} />
    </div>

    <h1>Coming soon!</h1>

    <img src={UnderConstructionGIF} />
  </Layout>
)

export default IndexPage
