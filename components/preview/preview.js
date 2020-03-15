import {useState} from 'react'
import MainContainer from '../containers/main-container'
import PreviewCard from './preview-card'
import PreviewLarge from './preview-large'
import {upperFirstLetter} from '../../utils/text-modifiers'
import styles from './preview.modules.scss'

const PostPreview = ({posts}) => {
  const [hover, setHover] = useState(false)
  const postSections = []

  for (const section in posts) {
    const subSections = []
    const postList = posts[section].map((post, i) => {
      if (i === 0) {
        return <PreviewLarge post={post} key={i}/>
      }
      subSections.push(
        <PreviewCard post={{...post}} hover={hover} setHover={setHover} key={i}/>
      )
    })

    if (section === 'featured') {
      postSections.unshift(<>
        <h1 className={styles.sectionHeader}>{upperFirstLetter(section, ' ', ' ')}</h1>
        { postList[0] }
        <div className={styles.previewRegular}>
          { subSections && subSections }
        </div>
      </>)
    } else {
      postSections.push(
        <>
          <h1 className={styles.sectionHeader}>{upperFirstLetter(section, ' ', ' ')}</h1>
          { postList[0] }
          <div className={styles.previewRegular}>
            { subSections && subSections}
          </div>
        </>
      )
    }
  }

  return (
    <MainContainer>
      { postSections.length > 0 && postSections }
    </MainContainer>
  )
}

export default PostPreview