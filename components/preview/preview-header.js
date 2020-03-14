import PreviewReadTime from './preview-read-time'
import PreviewDate from './preview-date.js'
import PreviewSummary from './preview-summary'
import styles from './preview.modules.scss'

const PreviewHeader = ({post}) => {
  return (
    <div className={styles.previewImage} style={{ backgroundImage: `url(${post.feature_image})` }}>
      <PreviewDate date={post.published_at}/>
      <PreviewReadTime time={post.reading_time}/>
      <PreviewSummary summary={post.excerpt}/>
    </div>
  )
}

export default PreviewHeader