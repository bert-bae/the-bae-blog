import NavigationBar from '../components/navigation/navigation-bar.js'
import Jumbotron from '../components/jumbotron/jumbotron'
import ArticlePreview from '../components/articles/preview'

const Index = () => {
  return (
    <>
      <NavigationBar/>
      <Jumbotron/>
      <ArticlePreview articles={[
          {
            title: "Article Title", 
            summary: "Article summary blah blah blah blah blah", 
            imgUrl: "/images/logo.png",
            date: new Date().toDateString()
          },
          {
            title: "Article Title", 
            summary: "Article summary blah blah blah blah blah", 
            imgUrl: "/images/logo.png",
            date: new Date().toDateString()
          },
          {
            title: "Article Title", 
            summary: "Article summary blah blah blah blah blah", 
            imgUrl: "/images/logo.png",
            date: new Date().toDateString()
          },
          {
            title: "Article Title", 
            summary: "Article summary blah blah blah blah blah", 
            imgUrl: "/images/logo.png",
            date: new Date().toDateString()
          }
        ]}/>
    </>
  )
}

export default Index