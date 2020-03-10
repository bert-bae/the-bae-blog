import styles from './carousel.modules.scss'

const CarouselIndicator = ({indicatorLength, setGet}) => {
  const indicators = indicatorLength > 1 ?
    Array.from({length: indicatorLength}, (item, key) => {
      return <div className={styles.indicator} key={key} data-active={setGet.get === key ? true : false} onClick={() => {
        setGet.set(key)
      }}></div>
    }) : null

  return (
    <div className={styles.carouselIndicator}>
      {indicators}
    </div>
  )
}

export default CarouselIndicator