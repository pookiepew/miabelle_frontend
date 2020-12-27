import checkInputValue from '../../shared/functions/checkInputVal';

import './css/FilterSongs.css';

const Filter = props => {
  console.log('[FilterSongs] render');

  const games = [];
  const modes = [];
  const routines = [];

  props.songs.forEach(song => {
    if (!games.includes(song.game)) games.push(song.game);
    if (!modes.includes(song.mode)) modes.push(song.mode);
    if (!routines.includes(song.routine)) routines.push(song.routine);
  });

  const onChangeHandler = (e, filterType) => {
    let value = e.target.value;
    if (filterType === 'text') value = checkInputValue(value);
    props.filterHandler({
      value,
      filterType
    });
  };

  return (
    <form className='filter-songs'>
      <input
        className='text-search2'
        type='text'
        placeholder='Search for Title or Artist'
        onChange={e => onChangeHandler(e, 'text')}
        value={props.filter.text ? props.filter.text : ''}
      />
      <select
        onChange={e => onChangeHandler(e, 'game')}
        defaultValue={games.length === 1 ? games[0] : 'default'}
      >
        <option value='default' disabled>
          -- Filter by game --
        </option>
        <option value='all_games'>Clear Filter</option>
        {games.sort().map(game => (
          <option value={game} key={game}>
            {game}
          </option>
        ))}
      </select>
      <select
        onChange={e => onChangeHandler(e, 'mode')}
        defaultValue={modes.length === 1 ? modes[0] : 'default'}
      >
        <option value='default' disabled>
          -- Filter by mode --
        </option>
        <option value='all_modes'>Clear Filter</option>
        {modes.sort().map(mode => (
          <option value={mode} key={mode}>
            {mode}
          </option>
        ))}
      </select>
      <select
        onChange={e => onChangeHandler(e, 'routine')}
        defaultValue={routines.length === 1 ? routines[0] : 'default'}
      >
        <option value='default' disabled>
          -- Filter by routines --
        </option>
        <option value='all_routines'>Clear Filter</option>
        {routines.sort().map(routine => (
          <option value={routine} key={routine}>
            {routine}
          </option>
        ))}
      </select>
      <input
        className='text-search'
        type='text'
        placeholder='Search for Title or Artist'
        onChange={e => onChangeHandler(e, 'text')}
        value={props.filter.text ? props.filter.text : ''}
      />
    </form>
  );
};

export default Filter;
