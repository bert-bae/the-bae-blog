import { useRouter } from 'next/router'
import styles from './misc.modules.scss'

const Router = ({href, children}) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a className={styles.router} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Router