import HighLights from './highlights'
import Carousel from '../carousel/carousel'
import styles from './jumbotron.modules.scss'

const Jumbotron = ({ highlights }) => {
  return (
    <div className={styles.jumbotronContainer}>
      <Carousel items={highlights}/>
    </div>
  )
}

export default Jumbotron