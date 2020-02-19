import FilledButton from '../buttons/filled-button'
import styles from './preview.modules.scss'

const PreviewFooter = ({post}) => {
  return (
    <>
      <h2>{post.title}</h2>
      <div className={styles.previewAuthor}>
        <img src={post.authors[0].profile_image}/>
        <p><i>By {post.authors[0].name}</i></p>
      </div>
    </>
  )
}

export default PreviewFooter