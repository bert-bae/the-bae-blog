import {useState, useEffect} from 'react'
import TransitionFade from '../transition/transition-fade'
import CarouselItem from './carousel-item'
import CarouselIndicator from './carousel-indicator'
import styles from './carousel.modules.scss'

const Carousel = ({items, showIndicator, key}) => {
  const [active, setActive] = useState(0)

  return (
    <div className={styles.carousel}>
      <TransitionFade set={active}>
        <CarouselItem item={items[active]} key={key}/>
      </TransitionFade>
     {
       showIndicator &&
       <CarouselIndicator items={items} active={active} setActive={setActive}/>
     }
    </div>
  )
}

export default Carousel