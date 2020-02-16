import styles from './container.modules.scss'

const PostContainer = (props) => {
  return <div className={styles.postContainer}>{props.children}</div>
}

export default PostContainer