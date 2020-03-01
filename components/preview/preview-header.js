import PreviewSummary from './preview-summary'
import ReadTime from '../icons/read-time'
import styles from './preview.modules.scss'
import moment from 'moment'

const PreviewHeader = ({post}) => {
  return (
    <div className={styles.previewImage} style={{ backgroundImage: `url(${post.feature_image})` }}>
      <div className={styles.previewDate}>
        <p>{moment(post.published_at).format('LL')}</p>
      </div>
      {/* <img className={styles.previewImage} src={post.feature_image}/> */}
      <div className={styles.previewTime}>
        <ReadTime readTime={post.reading_time}/>
      </div>
      <PreviewSummary summary={post.excerpt}/>
    </div>
  )
}

export default PreviewHeader