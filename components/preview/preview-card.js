import FilledButton from '../buttons/filled-button'
import Router from '../misc/router'
import styles from './preview.modules.scss'
import moment from 'moment'

const PreviewCard = ({post, hover, setHover}) => {
  console.log(post)

  return (
    <div className={styles.previewCard} 
      data-hover={hover} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} 
      key={post.key}
    >
      <div className={styles.overlay}>
        <div className={styles.dateContainer}>
          <p>{moment(post.published_at).format('LL')}</p>
        </div>
        <img className={styles.previewImage} src={post.feature_image}/>
      </div>
      {/* <div className={styles.previewText}>
        <h2>{post.title}</h2>
        <p>{post.excerpt}...</p>
        <div className={styles.previewFooter}>
          <div className={styles.previewAuthor}>
            <img src={post.authors[0].profile_image}/>
            <p><i>By {post.authors[0].name}</i></p>
          </div>
          <Router path='/posts/[post]' asPath={`/posts/${post.slug}`}>
            <FilledButton>Read post...</FilledButton>
          </Router>
        </div>
      </div> */}
    </div>
    //  | <span>Reading time: {post.reading_time} min</span>
  )
}

export default PreviewCard