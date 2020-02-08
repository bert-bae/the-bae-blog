import MainContainer from '../containers/main-container'
import GridContainer from '../containers/grid-container'
import styles from './articles.modules.scss'

const ArticlePreview = (props) => {
  const articles = props.articles.map(i => {
    return (
      <>
        <img className={styles.previewImage} src={i.imgUrl}/>
        <GridContainer
          columns={1}
          rows={2}
          >
          <h2>{i.title}</h2>
          <p>{i.summary}</p>
        </GridContainer>
      </>
    )
  })
  return (
    <MainContainer className={styles.preview}>
      <GridContainer 
        columns={2} 
        rows={1} 
        gap={10}
        justifyItems={"start"}
        >
        { props.articles && articles}
      </GridContainer>
    </MainContainer>
  )
}

export default ArticlePreview