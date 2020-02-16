import Link from 'next/link'
import NavigationMenu from './navigation-menu/navigation-menu'
import {Grid} from '@material-ui/core'
import styles from './navigation-bar.modules.scss'

const NavigationBar = () => {
  return (
    <div className={styles.fullBar}>
      <Grid className={styles.navigationBar} container direction="row" justify="space-between" alignItems="center">
        <Link href="/">
          <a>
            <img src={`${process.env.S3_BUCKET}/images/logocropped.png`} className={styles.mainLogo}/>
          </a>
        </Link>
        <NavigationMenu/>
      </Grid>
    </div>
  )
}

export default NavigationBar