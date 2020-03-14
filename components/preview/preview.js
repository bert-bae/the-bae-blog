import {Fade} from 'react-reveal'
import {useState} from 'react'
import MainContainer from '../containers/main-container'
import PreviewCard from './preview-card'
import styles from './preview.modules.scss'

const PostPreview = ({posts}) => {
  const [hover, setHover] = useState(false)
  const postList = posts.map((post, i) => {
    return (
      <Fade key={i}>
        <PreviewCard post={{...post, key: i}} hover={hover} setHover={setHover}/>
      </Fade>
    )
  })
  return (
    <MainContainer>
      <div className={styles.preview}>
        { posts && postList }
      </div>
    </MainContainer>
  )
}

export default PostPreview