import { useState, useEffect } from 'react'
import DefaultContainer from '../components/misc/default-container'
import DefaultHead from '../components/misc/default-head'
import NavigationBar from '../components/navigation/navigation-bar.js'
import Jumbotron from '../components/jumbotron/jumbotron'
import PostPreview from '../components/preview/preview'
import NavigationFooter from '../components/navigation/navigation-footer'
import Carousel from '../components/carousel/carousel'
import PreviewCarouselItem from '../components/preview/preview-carousel-item'
import { getPosts, getFeaturePosts } from '../api/ghost';

const Posts = ({ initialPosts, highlightPosts, featurePosts }) => {
  const [page, setPage] = useState("latest")
  const [posts, setPosts] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)

    const featureLength = highlightPosts.length - 1 || 0
    let current = active
    const interval = window.setInterval(() => {
      if (featureLength === current) {
        current = 0
      } else {
        current += 1
      }
      setActive(current)
    }, 10000)

    setPosts(initialPosts)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <DefaultContainer>
      <DefaultHead />
      <NavigationBar />
      <Jumbotron>
        <Carousel
          setGet={{ set: setActive, get: active }}
          transition="fade"
          showIndicator={true}
          indicatorLength={highlightPosts ? highlightPosts.length : 0}>
          <PreviewCarouselItem preview={highlightPosts[active]}/>
        </Carousel>
      </Jumbotron>
      <PostPreview posts={posts} featurePosts={featurePosts}/>
      <NavigationFooter page={page} setState={{ setPage, setPosts }} />
    </DefaultContainer>
  )
}

Posts.getInitialProps = async () => {
  return {
    initialPosts: await getPosts({ filter: 'featured:false'}),
    highlightPosts: await getFeaturePosts(3),
    featurePosts: await getFeaturePosts(),
  }
}

export default Posts