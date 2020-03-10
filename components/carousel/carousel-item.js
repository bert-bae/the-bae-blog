import styles from './carousel.modules.scss'

const CarouselItem = (props) => {
  return (
    <div className={styles.carouselItem}>
      {props.children}
    </div>
  )
}

export default CarouselItem