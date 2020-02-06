import styles from './container.modules.scss'

const MainContainer = (props) => {
  return <div className={styles.mainContainer}>{props.children}</div>
}

export default MainContainer