import Carousel from '../carousel/carousel'
import CarouselItem from '../carousel/carousel-item'
import Router from '../misc/router'
import styles from './home.styles.scss'

const HomeMainHighlights = () => {
  return (
    <div className={styles.homeHighlights}>
      <Carousel transition="scroll">
        <Router path="/product/planters">
          <CarouselItem>
            <div className={styles.highlight} style={{backgroundImage: "url(/images/cta-together.png)"}}></div>
          </CarouselItem>
        </Router>
        <Router path="/product/planters">
          <CarouselItem>
            <div className={styles.highlight} style={{backgroundImage: "url(/images/cta-together.png)"}}></div>
          </CarouselItem>
        </Router>
        <Router path="/product/planters">
          <CarouselItem>
            <div className={styles.highlight} style={{backgroundImage: "url(/images/cta-together.png)"}}></div>
          </CarouselItem>
        </Router>
      </Carousel>
    </div>
  )
}

export default HomeMainHighlights