import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home Page"}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
        />
      </Layout>
      <title>Home Page</title>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage