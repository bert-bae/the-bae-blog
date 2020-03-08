import styles from './home.styles.scss'

const HomeImage = () => {
  return <img className={styles.homeImage} src={`${process.env.S3_BUCKET}/images/jumbotron.jpg`}/>
}

export default HomeImage