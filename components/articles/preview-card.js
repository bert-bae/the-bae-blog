import styles from './articles.modules.scss'

const PreviewCard = ({article}) => {
  return (
    <div className={styles.previewCard} key={article.key}>
      <img className={styles.previewImage} src={article.imgUrl}/>
      <div>
        <div className={styles.dateContainer}>
          <p><i>{article.date}</i></p>
        </div>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </div>
    </div>
  )
}

export default PreviewCard