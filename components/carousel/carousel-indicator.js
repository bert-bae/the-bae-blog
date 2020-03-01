import {useState} from 'react'
import styles from './carousel.modules.scss'

const CarouselIndicator = ({items, active, setActive}) => {
  const indicators = items.length > 1 ?
    items.map((item, key) => {
      return <div className={styles.indicator} key={key} data-active={active === key ? true : false} onClick={() => {
        setActive(key)
      }}></div>
    }) : null

  return (
    <div className={styles.carouselIndicator}>
      {indicators}
    </div>
  )
}

export default CarouselIndicator