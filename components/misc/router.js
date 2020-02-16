import { useRouter } from 'next/router'
import styles from './misc.modules.scss'

const Router = ({path, query, asPath, children}) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push({
      pathname: path,
      query: query || {},
    }, asPath)
  }

  return (
    <a className={styles.router} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Router