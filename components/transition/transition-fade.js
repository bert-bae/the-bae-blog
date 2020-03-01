import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './transition.scss'

const TransitionFade = (props) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {props.children}
    </ReactCSSTransitionGroup>
  )
}

export default TransitionFade