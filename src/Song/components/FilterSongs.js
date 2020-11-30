import checkInputValue from '../../shared/functions/checkInputVal';

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
    <form>
      <select onChange={e => onChangeHandler(e, 'game')} defaultValue='default'>
        <option value='default' disabled>
          -- Please select one --
        </option>
        <option value='all_games'>Clear Filter</option>
        {games.sort().map(game => (
          <option value={game} key={game}>
            {game}
          </option>
        ))}
      </select>
      <select onChange={e => onChangeHandler(e, 'mode')} defaultValue='default'>
        <option value='default' disabled>
          -- Please select one --
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
        defaultValue='default'
      >
        <option value='default' disabled>
          -- Please select one --
        </option>
        <option value='all_routines'>Clear Filter</option>
        {routines.sort().map(routine => (
          <option value={routine} key={routine}>
            {routine}
          </option>
        ))}
      </select>
      <input type='text' onChange={e => onChangeHandler(e, 'text')} />
    </form>
  );
};

export default Filter;