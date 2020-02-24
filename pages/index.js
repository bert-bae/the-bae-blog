import {useState, useEffect} from 'react'
import DefaultContainer from '../components/misc/default-container'
import DefaultHead from '../components/misc/default-head'
import NavigationBar from '../components/navigation/navigation-bar.js'
import Jumbotron from '../components/jumbotron/jumbotron'
import PostPreview from '../components/preview/preview'
import NavigationFooter from '../components/navigation/navigation-footer'
import { getPosts } from '../api/ghost';

const Index = ({ initialPosts, highlightPosts }) => {
  const [page, setPage] = useState("latest")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    setPosts(initialPosts)
  }, [])

  return (
    <DefaultContainer>
      <DefaultHead/>
      <NavigationBar/>
      <Jumbotron highlights={highlightPosts}/>
      <PostPreview posts={posts}/>
      <NavigationFooter page={page} setState={{setPage, setPosts}}/>
    </DefaultContainer>
  )
}

Index.getInitialProps = async () => {
  const filterBy = 'highlights'
  return { 
    initialPosts: await getPosts(),
    highlightPosts: await getPosts({ filter: `tags:${filterBy}`} )
  }
}

export default Index