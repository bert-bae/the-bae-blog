import TransitionFade from '../transition/transition-fade'
import TransitionScroll from '../transition/transition-scroll'
import CarouselIndicator from './carousel-indicator'
import styles from './carousel.modules.scss'

const Carousel = ({setGet, showIndicator, indicatorLength, transition, children}) => {
  return (
    <div className={styles.carousel}>
      { transition === 'fade' && 
        <TransitionFade position={setGet.get}>
          {children}
        </TransitionFade>
      }
      {
        transition === 'scroll' &&
        <TransitionScroll>
          {children}
        </TransitionScroll>
      }
      {
        showIndicator && indicatorLength &&
        <CarouselIndicator indicatorLength={indicatorLength} setGet={setGet}/>
      }
    </div>
  )
}

export default Carousel