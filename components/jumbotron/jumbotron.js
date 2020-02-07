import MainContainer from '../containers/main-container'
import styles from './jumbotron.modules.scss'

const Jumbotron = () => {
  return (
    <div className={styles.jumbotronContainer}>
      <img src="./images/jumbotron.jpg" className={styles.jumbotronImage}/>
    </div>
  )
}

export default Jumbotron