import {Button} from '@material-ui/core'
import styles from './button-styles.modules.scss'

const GeneralButton = (props) => {
  return <Button className={styles.generalButton} variant="outlined" color="default">{props.children}</Button>
}

export default GeneralButton