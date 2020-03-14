import styles from './preview.modules.scss'
import moment from 'moment'

const PreviewDate = ({ date }) => {
  return (
    <div className={styles.previewDate}>
      <p>{moment(date).format('LL')}</p>
    </div>
  )
}

export default PreviewDate