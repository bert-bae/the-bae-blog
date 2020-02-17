import FilledButton from '../buttons/filled-button'
import Router from '../misc/router'
import styles from './preview.modules.scss'
import moment from 'moment'

const PreviewCard = ({post}) => {
  console.log(post)
  return (
    <div className={styles.previewCard} key={post.key}>
      <img className={styles.previewImage} src={post.feature_image}/>
      <div className={styles.previewText}>
        <div className={styles.dateContainer}>
          <p><i>{moment(post.published_at).format('LL')}</i> | <span>Reading time: {post.reading_time} min</span></p>
        </div>
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
      </div>
    </div>
  )
}

export default PreviewCard