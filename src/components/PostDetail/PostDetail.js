import React from 'react'
import PropTypes from 'prop-types'

const PostDetail = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
)

PostDetail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default PostDetail
