import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(
        node => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <h2>
                {node.frontmatter.title}
              </h2>
            </Link>
            <p>posted: {node.frontmatter.datePublished}</p>
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
        slug
        frontmatter {
          title
          datePublished(formatString: "DD MMMM yyyy")
        }
      }
    }
  }
`

export default BlogPage
