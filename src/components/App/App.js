import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'normalize.css'

import Header from '../Header'
import About from '../About'
import NotFound from '../NotFound'
import Home from '../Home'

import posts from '../../../blog-posts'
import PostDetail from '../PostDetail'

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='/posts/:slug' render={({ match: { params: { slug } } }) => (
          <PostDetail {...(posts.find(post => post.slug === slug))} />
        )} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default App
