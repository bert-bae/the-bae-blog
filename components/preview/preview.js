import MainContainer from '../containers/main-container'
import PreviewCard from './preview-card'
import styles from './preview.modules.scss'

const PostPreview = ({posts}) => {
  const postList = posts.map((post, i) => {
    return <PreviewCard post={{...post, key: i}} key={i}/>
  })
  return (
    <MainContainer className={styles.preview}>
      { posts && postList }
    </MainContainer>
  )
}

export default PostPreview