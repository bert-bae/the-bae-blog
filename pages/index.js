import {useState, useEffect} from 'react'
import NavigationBar from '../components/navigation/navigation-bar.js'
import Jumbotron from '../components/jumbotron/jumbotron'
import ArticlePreview from '../components/articles/preview'
import NavigationFooter from '../components/navigation/navigation-footer'

const Index = () => {
  const [page, setPage] = useState("latest")
  const [articles, setArticles] = useState([])
  useEffect(() => {
    setArticles([
      {
        title: "Article Title Default", 
        summary: "Article summary blah blah blah blah blah", 
        imgUrl: "/images/logo.png",
        date: new Date().toDateString()
      },
      {
        title: "Article Title Default", 
        summary: "Article summary blah blah blah blah blah", 
        imgUrl: "/images/logo.png",
        date: new Date().toDateString()
      },
      {
        title: "Article Title Default", 
        summary: "Article summary blah blah blah blah blah", 
        imgUrl: "/images/logo.png",
        date: new Date().toDateString()
      },
    ])
  }, [])

  return (
    <>
      <NavigationBar/>
      <Jumbotron/>
      <ArticlePreview articles={articles}/>
      <NavigationFooter page={page} setState={{setPage, setArticles}}/>
    </>
  )
}

export default Index