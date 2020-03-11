import {useState, useEffect} from 'react'
import DefaultContainer from '../components/misc/default-container'
import DefaultHead from '../components/misc/default-head'
import NavigationBar from '../components/navigation/navigation-bar.js'
import NavigationFooter from '../components/navigation/navigation-footer'
import HomePage from '../components/homepage/homepage'
import { getPosts } from '../api/ghost';

const Index = ({ initialPosts }) => {
  return (
    <DefaultContainer>
      <DefaultHead/>
      <NavigationBar color="white"/>
      <HomePage/>
      {/* <NavigationFooter page={page} setState={{setPage, setPosts}}/> */}
    </DefaultContainer>
  )
}

Index.getInitialProps = async () => {
  return { 
    initialPosts: await getPosts()
  }
}

export default Index