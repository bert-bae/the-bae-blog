import {Button} from '@material-ui/core'
import styles from './button-styles.modules.scss'

const FilledButton = (props) => {
  return <Button className={styles.filledButton} variant="contained" color="default">{props.children}</Button>
}

export default FilledButton