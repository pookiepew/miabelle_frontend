import ReactDOM from 'react-dom';

import './css/Backdrop.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={props.onClick}></div>,
    document.getElementById('backdrop')
  );
};

export default Backdrop;
