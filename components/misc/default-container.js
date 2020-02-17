import styles from './misc.modules.scss'

const DefaultContainer = (props) => {
  return <div className={styles.defaultContainer}>{props.children}</div>
}

export default DefaultContainer