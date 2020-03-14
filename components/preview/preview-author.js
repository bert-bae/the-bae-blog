import styles from './preview.modules.scss'

const PreviewAuthor = ({author}) => {
  return (
    <div className={styles.previewAuthor}>
      <img src={author.profile_image}/>
      <p><i>By {author.name}</i></p>
    </div>
  )
}

export default PreviewAuthor