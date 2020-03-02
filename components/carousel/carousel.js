import {useState, useEffect} from 'react'
import TransitionFade from '../transition/transition-fade'
import CarouselItem from './carousel-item'
import CarouselIndicator from './carousel-indicator'
import styles from './carousel.modules.scss'

const Carousel = ({items, showIndicator, key}) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const featureLength = items.length - 1
    let current = 0
    const interval = window.setInterval(() => {
      if (featureLength === current) {
        current = 0
      } else {
        current += 1
      }
      setActive(current)
    }, 10000)
    return () => window.clearInterval(interval)
  }, [])

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