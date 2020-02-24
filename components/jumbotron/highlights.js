import styles from './jumbotron.modules.scss'

const HighLights = ({ highlights }) => {
  return (
    <div className={styles.highlights}>
      <img src="./images/jumbotron.jpg" className={styles.jumbotronImage}/>
    </div>
  )
}

export default HighLights