import TransitionFade from '../transition/transition-fade'
import styles from './carousel.modules.scss'

const CarouselItem = ({ item }) => {
  return (
    <TransitionFade>
      <div className={styles.carouselItem}>
        <img src={item.feature_image}/>
        <div className={styles.carouselContent}>
          <h1 className={styles.carouselHeader}>{item.title}</h1>
          <p className={styles.carouselText}>{item.excerpt}</p>
        </div>
      </div>
    </TransitionFade>
  )
}

export default CarouselItem