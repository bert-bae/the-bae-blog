import styles from './container.modules.scss'

const CustomGrid = (props) => {
  return (
    <div 
      className={`
        ${styles.grid} 
        ${props.columns && `${styles[`gridTemplateColumns${props.columns}`]}`} 
        ${props.rows && `${styles[`gridTemplateRows${props.rows}`]}`}
      `}
      style={{
        gridGap: `${props.gap}px`,
        justifyItems: props.justifyItems,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        alignContent: props.alignContent,
      }}>
      {props.children}
    </div>
  )
}

export default CustomGrid