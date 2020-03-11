import GeneralButton from '../../buttons/general-button'
import Router from '../../misc/router'
import styles from './navigation-menu.modules.scss'

const NavigationMenu = ({color}) => {
  return (
    <div className={styles.navigationMenu}>
      <Router path="/posts">
        <GeneralButton color={color}>Posts</GeneralButton>
      </Router>
      <Router path="/about">
        <GeneralButton color={color}>About</GeneralButton>
      </Router>
    </div>
  )
}

export default NavigationMenu