import {useState} from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './transition.modules.scss'

const TransitionScroll = ({children}) => {
  const [position, setPosition] = useState(0)
  const childElements = children.map((comp, i) => {
    return (
      <div id={`scroll-${i}`} key={`scroll-${i}`}>
        {comp}
      </div>
    )
  })

  const onClick = () => {
    if (children.length - 1 === position) {
      setPosition(0)
    } else {
      setPosition(position + 1)
    }
  }

  return (
    <div className={styles.transitionScroll}>
      <div className={styles.scroller}>
        {children && childElements}
      </div>
      <div className={styles.scrollTrigger} onClick={onClick}>
        <a href={`#scroll-${position}`}>
          <ArrowForwardIcon style={{ color: "white" }}/>
        </a>
      </div>
    </div>
  )
}

export default TransitionScroll