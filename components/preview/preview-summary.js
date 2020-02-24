import styles from './preview.modules.scss'

const PreviewSummary = ({summary}) => {
  return (
    <div 
      className={styles.previewSummary}>
      <p>{summary}...</p>
    </div>
  )
}

export default PreviewSummary