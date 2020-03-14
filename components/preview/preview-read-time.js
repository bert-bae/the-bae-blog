import styles from './preview.modules.scss'
import ReadTime from '../icons/read-time'

const PreviewReadTime = ({ time }) => {
  return (
    <div className={styles.previewTime}>
      <ReadTime readTime={time}/>
    </div>
  )
}

export default PreviewReadTime
