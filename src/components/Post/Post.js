import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Post.css'

const Post = ({ title, excerpt, slug }) => (
  <article className={styles.post}>
    <h2 className={styles.title}><Link to={`/posts/${slug}`}>{title}</Link></h2>
    <p className={styles.excerpt}>{excerpt}</p>
  </article>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default Post
