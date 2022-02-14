import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home Page"}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
      <title>Home Page</title>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage