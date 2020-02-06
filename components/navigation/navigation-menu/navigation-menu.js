import Link from 'next/link'
import {ButtonGroup} from '@material-ui/core'
import GeneralButton from '../../buttons/general-button'
import styles from './navigation-menu.modules.scss'

const NavigationMenu = () => {
  return (
    <div className={styles.navigationMenu}>
      <Link href="/posts">
        <GeneralButton>Posts</GeneralButton>
      </Link>
      <Link href="/gifts">
        <GeneralButton>Gifts</GeneralButton>
      </Link>
      <Link href="/About">
        <GeneralButton>About</GeneralButton>
      </Link>
    </div>
  )
}

export default NavigationMenu