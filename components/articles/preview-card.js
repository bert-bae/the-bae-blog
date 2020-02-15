import FilledButton from '../buttons/filled-button'
import Router from '../misc/router'
import styles from './articles.modules.scss'

const PreviewCard = ({article}) => {
  return (
    <div className={styles.previewCard} key={article.key}>
      <img className={styles.previewImage} src={article.imgUrl}/>
      <div className={styles.previewText}>
        <div className={styles.dateContainer}>
          <p><i>{article.date}</i></p>
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