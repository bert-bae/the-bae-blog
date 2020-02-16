import FilledButton from '../buttons/filled-button'
import Router from '../misc/router'
import styles from './articles.modules.scss'
import moment from 'moment'

const PreviewCard = ({article}) => {
  return (
    <div className={styles.previewCard} key={article.key}>
      <img className={styles.previewImage} src={article.feature_image}/>
      <div className={styles.previewText}>
        <div className={styles.dateContainer}>
          <p><i>{moment(article.published_at).format('LL')}</i> | <span>Reading time: {article.reading_time}min</span></p>
        </div>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <Router href={`/articles/:id`}>
          <FilledButton>Read post...</FilledButton>
        </Router>
      </div>
    </div>
  )
}

export default PreviewCard

// { id: '5e48f4ed94b82122d97fe3eb',
//     uuid: 'c0bf2e52-3940-42f0-9ec1-c6fab9fc00db',
//     title: 'Blog Post',
//     slug: 'blog-post',
//     html: '<p>This is a test post.</p>',
//     comment_id: '5e48f4ed94b82122d97fe3eb',
//     feature_image:
//      'http://localhost:2368/content/images/2020/02/simone-dalmeri-48KNCEZVaE0-unsplash.jpg',
//     featured: false,
//     visibility: 'public',
//     send_email_when_published: false,
//     created_at: '2020-02-16T07:53:17.000+00:00',
//     updated_at: '2020-02-16T07:53:50.000+00:00',
//     published_at: '2020-02-16T07:53:50.000+00:00',
//     custom_excerpt: null,
//     codeinjection_head: null,
//     codeinjection_foot: null,
//     custom_template: null,
//     canonical_url: null,
//     url: 'http://localhost:2368/blog-post/',
//     excerpt: 'This is a test post.',
//     reading_time: 0,
//     og_image: null,
//     og_title: null,
//     og_description: null,
//     twitter_image: null,
//     twitter_title: null,
//     twitter_description: null,
//     meta_title: null,
//     meta_description: null,
//     email_subject: null }