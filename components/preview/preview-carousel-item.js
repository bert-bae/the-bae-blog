import CarouselItem from '../carousel/carousel-item'
import styles from './preview.modules.scss'

const PreviewCarouselItem = ({preview}) => {
  return (
    <CarouselItem>
      <div className={styles.previewCarousel}>
        <img src={preview.feature_image}/>
        <div className={styles.carouselContent}>
          <h1 className={styles.carouselHeader}>{preview.title}</h1>
          <p className={styles.carouselText}>{preview.excerpt}</p>
        </div>
      </div>
    </CarouselItem>
  )
}

export default PreviewCarouselItem