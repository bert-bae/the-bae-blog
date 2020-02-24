import CarouselItem from './carousel-item'
import styles from './carousel.modules.scss'

const Carousel = ({items}) => {
  const itemMap = items.map((item, i) => {
    return <CarouselItem item={item} key={i}/>
  })
  return (
    <div className={styles.carousel}>
      { items.length > 0 && itemMap }
    </div>
  )
}

export default Carousel