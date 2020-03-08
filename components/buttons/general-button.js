import {Button, withStyles} from '@material-ui/core'
import styles from './button-styles.modules.scss'


const GeneralButton = (props) => {
  const StyledButton = withStyles(theme => ({
    root: {
      color: props.color || 'default',
    },
  }))(Button);
  return <StyledButton className={styles.generalButton}>{props.children}</StyledButton>
}

export default GeneralButton