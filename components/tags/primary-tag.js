import styles from './tags.modules.scss'

const PrimaryTag = ({children}) => {
  return <div className={styles.primaryTag}>{children}</div>
}

export default PrimaryTag