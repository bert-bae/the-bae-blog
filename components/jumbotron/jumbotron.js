import styles from './jumbotron.modules.scss'

const Jumbotron = (props) => {
  return (
    <div className={props.isHome ? styles.jumbotronHome : styles.jumbotronContainer}>
      {props.children}
    </div>
  )
}

export default Jumbotron