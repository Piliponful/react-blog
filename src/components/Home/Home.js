import React from 'react'

import Post from '../Post'

import posts from '../../../blog-posts'

const Home = () => (
  <div>
    {posts.map(post => <Post {...post} key={post.slug} />)}
  </div>
)

export default Home
