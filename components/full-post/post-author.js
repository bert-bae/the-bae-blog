import styles from './post.modules.scss'

const PostAuthor = ({post}) => {
  return (
    <>
     <div className={styles.postAuthor}>
        <img src={post.authors[0].profile_image}/>
        <p><i>By {post.authors[0].name}</i></p>
      </div>
    </>
  )
}

export default PostAuthor