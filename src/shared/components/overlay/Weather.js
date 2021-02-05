import './css/Weather.css';

const Weather = ({ weatherStyle }) => {
  return <div className={'overlay weather ' + weatherStyle}></div>;
};

export default Weather;
