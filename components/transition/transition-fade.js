import {CSSTransition, TransitionGroup} from 'react-transition-group'

const TransitionFade = ({position, children}) => {

  return (
    <TransitionGroup style={{ height: '100%'}}>
      <CSSTransition
        key={position}
        classNames="fade"
        timeout={{enter: 600, exit: 300}}
      >
        {children}
      </CSSTransition>
      <style>{`
        .fade-enter {
          opacity: 0.01;
        }
        
        .fade-enter.fade-enter-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }
        
        .fade-exit {
          opacity: 1;
        }
        
        .fade-exit.fade-exit-active {
          opacity: 0.01;
          transition: opacity 300ms ease-in;
        }
      `}</style>
    </TransitionGroup>
  )
}

export default TransitionFade