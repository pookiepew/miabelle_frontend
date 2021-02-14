const Button = ({ backgroundColor = '#3bd63b', text, onClick }) => (
  <button className='btn' onClick={onClick} style={{ backgroundColor }}>
    {text}
  </button>
);

export default Button;
