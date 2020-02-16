import {useState, useEffect} from 'react'
import DefaultHead from '../components/misc/default-head'
import NavigationBar from '../components/navigation/navigation-bar.js'
import Jumbotron from '../components/jumbotron/jumbotron'
import ArticlePreview from '../components/articles/preview'
import NavigationFooter from '../components/navigation/navigation-footer'
import { getArticles } from '../api/ghost';

const Index = ({ initialArticles }) => {
  const [page, setPage] = useState("latest")
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(initialArticles)
  }, [])
  
  return (
    <>
      <DefaultHead/>
      <NavigationBar/>
      <Jumbotron/>
      <ArticlePreview articles={articles}/>
      <NavigationFooter page={page} setState={{setPage, setArticles}}/>
    </>
  )
}

Index.getInitialProps = async () => {
  const articles = await getArticles();
  console.log(articles)
  return { initialArticles: articles }
}

export default Index