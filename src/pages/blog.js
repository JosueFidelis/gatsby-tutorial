import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(
        node => (
          <article key={node.id}>
            <h2>
              {node.frontmatter.title}
            </h2>
            <p>posted: {node.frontmatter.datePublished}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        id
        body
        frontmatter {
          title
          datePublished(formatString: "DD MMMM yyyy")
        }
      }
    }
  }
`

export default BlogPage
