import './css/Hamburger.css';

const Hamburger = props => {
  return (
    <div className={props.classes} onClick={props.click}>
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </div>
  );
};

export default Hamburger;
