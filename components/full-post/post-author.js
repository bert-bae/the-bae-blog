import moment from 'moment'
import styles from './post.modules.scss'

const PostAuthor = ({post, showDetail}) => {
  return (
    <div className={styles.postAuthor}>
      <img src={post.authors[0].profile_image}/>
      <div>
        <p><i>By {post.authors[0].name}</i></p>
        { showDetail &&
          <p>{moment(post.published_at).format('LL')}</p>
        }
      </div>
    </div>
  )
}

export default PostAuthor