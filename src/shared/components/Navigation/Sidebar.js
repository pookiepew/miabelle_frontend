import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './css/Sidebar.css';

const Sidebar = props => {
  const sidebar = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='slide-in-right'
      mountOnEnter
      unmountOnExit
    >
      <aside className='sidebar' onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(sidebar, document.getElementById('sidebar'));
};

export default Sidebar;
