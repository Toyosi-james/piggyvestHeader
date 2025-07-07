import React from 'react'
import StoriesHero from '../components/block/stories/StoriesHero'
import Logo from "../static/Logo"
import Footer from "../static/Footer"
import StoriesReviews from '../components/block/stories/StoriesReviews'
import UsersStories from '../components/block/stories/UsersStories'
const Stories = () => {
  return (
    <div>
     <StoriesHero/>
     <StoriesReviews/>
     <UsersStories/>
        <Logo/>
        <Footer/>
    </div>
  )
}

export default Stories
