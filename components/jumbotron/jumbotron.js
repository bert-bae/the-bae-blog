import styles from './jumbotron.modules.scss'

const Jumbotron = (props) => {
  return (
    <div className={styles.jumbotronContainer}>
      {props.children}
    </div>
  )
}

export default Jumbotron