import {useState} from 'react'
import MainContainer from '../containers/main-container'
import PreviewCard from './preview-card'
import PreviewLarge from './preview-large'
import styles from './preview.modules.scss'

const PostPreview = ({posts, featurePosts}) => {
  const [hover, setHover] = useState(false)
  const postList = posts.map((post, i) => {
    return <PreviewCard post={{...post}} hover={hover} setHover={setHover} key={i}/>
  })

  const featureList = featurePosts.map((post, i) => {
    return <PreviewLarge post={post}/>
  })

  return (
    <MainContainer>
      <h1>Trending Now</h1>
      { featurePosts && featureList}
      <div className={styles.previewRegular}>
        { posts && postList }
      </div>
    </MainContainer>
  )
}

export default PostPreview