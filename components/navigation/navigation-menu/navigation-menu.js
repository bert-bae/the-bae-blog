import GeneralButton from '../../buttons/general-button'
import Router from '../../misc/router'
import styles from './navigation-menu.modules.scss'

const NavigationMenu = () => {
  return (
    <div className={styles.navigationMenu}>
      <Router path="/posts">
        <GeneralButton color="white">Posts</GeneralButton>
      </Router>
      <Router path="/about">
        <GeneralButton color="white">About</GeneralButton>
      </Router>
    </div>
  )
}

export default NavigationMenu