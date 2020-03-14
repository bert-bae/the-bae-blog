import {Zoom} from 'react-reveal'
import Carousel from '../carousel/carousel'
import CarouselItem from '../carousel/carousel-item'
import Router from '../misc/router'
import styles from './home.styles.scss'

const HomeMainHighlights = () => {
  return (
    <div className={styles.homeHighlights}>
      <Zoom delay={300}>
        <Carousel transition="scroll">
          <Router path="/product/planters">
            <CarouselItem>
              <div className={styles.highlight} style={{backgroundImage: "url(/images/take-risks.png)"}}></div>
            </CarouselItem>
          </Router>
          <Router path="/product/planters">
            <CarouselItem>
              <div className={styles.highlight} style={{backgroundImage: "url(/images/together.png)"}}></div>
            </CarouselItem>
          </Router>
          <Router path="/product/planters">
            <CarouselItem>
              <div className={styles.highlight} style={{backgroundImage: "url(/images/fork-road.png)"}}></div>
            </CarouselItem>
          </Router>
        </Carousel>
      </Zoom>
    </div>
  )
}

export default HomeMainHighlights