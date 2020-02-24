import {useState, useEffect} from 'react'
import CarouselItem from './carousel-item'
import CarouselIndicator from './carousel-indicator'
import styles from './carousel.modules.scss'

const Carousel = ({items, showIndicator}) => {
  const [active, setActive] = useState(0)

  return (
    <div className={styles.carousel}>
      <CarouselItem item={items[active]} />
     {
       showIndicator &&
       <CarouselIndicator items={items} active={active} setActive={setActive}/>
     }
    </div>
  )
}

export default Carousel