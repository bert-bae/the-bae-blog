import GeneralButton from '../../buttons/general-button'
import Router from '../../misc/router'
import styles from './navigation-menu.modules.scss'
const NavigationMenu = () => {
  return (
    <div className={styles.navigationMenu}>
      <Router href="/posts">
        <GeneralButton>Posts</GeneralButton>
      </Router>
      <Router href="/gifts">
        <GeneralButton>Gifts</GeneralButton>
      </Router>
      <Router href="/About">
        <GeneralButton>About</GeneralButton>
      </Router>
    </div>
  )
}

export default NavigationMenu