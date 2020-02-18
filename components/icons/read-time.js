import styles from './icons.modules.scss'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

const ReadTime = ({readTime}) => {
  return (
    <div className={styles.readTime}><AccessTimeIcon fontSize="inherit"/> {readTime} min</div>
  )
}

export default ReadTime