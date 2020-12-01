import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const Sidebar = props => {
  const sidebar = (
    <CSSTransition>
      <aside>{props.children}</aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(sidebar, document.getElementById('sidebar'));
};

export default Sidebar;
