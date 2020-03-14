import styles from './post.modules.scss'

const PostHtml = ({html}) => {
  return <section className={styles.postTheme} dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostHtml