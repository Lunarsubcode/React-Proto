import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>All you need for a 
close, comfortable shave.</h1>
      <p>It's time to reinvent your shave.</p>
      <Link to="/page-2/">Get Stated</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
