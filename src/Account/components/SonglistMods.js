import './css/SonglistMods.css';

const SonglistMods = ({ show }) => {
  return <h1 className={show ? 'block' : 'hide'}>SongListMods</h1>;
};

export default SonglistMods;
