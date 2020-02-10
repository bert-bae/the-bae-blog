import MainContainer from '../containers/main-container'
import GridContainer from '../containers/grid-container'
import PreviewCard from './preview-card'
import styles from './articles.modules.scss'

const ArticlePreview = (props) => {
  const articles = props.articles.map((article, i) => {
    return <PreviewCard article={{...article, key: i}} key={i}/>
  })
  return (
    <MainContainer className={styles.preview}>
      { props.articles && articles}
    </MainContainer>
  )
}

export default ArticlePreview