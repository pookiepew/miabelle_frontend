const createFilterObj = (reduxFilter, value, filterType) => {
  const filter = {};
  let resetFilteredSongs = false;
  if (reduxFilter.game) filter.game = reduxFilter.game;
  if (reduxFilter.mode) filter.mode = reduxFilter.mode;
  if (reduxFilter.routine) filter.routine = reduxFilter.routine;
  if (filterType === 'game') filter.game = value;
  if (filterType === 'mode') filter.mode = value;
  if (filterType === 'routine') filter.routine = value;
  if (filterType === 'text') {
    filter.text = value;
    resetFilteredSongs = true;
  }
  if (filterType === 'text' && value === '') {
    delete filter.text;
    resetFilteredSongs = true;
  }
  if (value === 'all_games') {
    delete filter.game;
    resetFilteredSongs = true;
  }
  if (value === 'all_modes') {
    delete filter.mode;
    resetFilteredSongs = true;
  }
  if (value === 'all_routines') {
    delete filter.routine;
    resetFilteredSongs = true;
  }
  return { newFilter: filter, resetFilteredSongs };
};

const findTextMatches = (songsToMatch, searchArg) => {
  return songsToMatch.filter(song => {
    const regex = new RegExp(searchArg, 'gi');
    return song.title.match(regex) || song.artist.match(regex);
  });
};

const songsFilter = (songs, filterFromComponent) => {
  const { all, filtered, filter } = songs;
  const { value, filterType } = filterFromComponent;

  let filteredSongs;

  if (filtered.length === 0) filteredSongs = all;
  if (filtered.length > 0) filteredSongs = filtered;

  const { newFilter, resetFilteredSongs } = createFilterObj(
    filter,
    value,
    filterType
  );

  if (resetFilteredSongs) filteredSongs = all;

  if (newFilter.game) {
    filteredSongs = filteredSongs.filter(song => song.game === newFilter.game);
  }
  if (newFilter.mode) {
    filteredSongs = filteredSongs.filter(song => song.mode === newFilter.mode);
  }
  if (newFilter.routine) {
    filteredSongs = filteredSongs.filter(
      song => song.routine === newFilter.routine
    );
  }
  if (newFilter.text) {
    filteredSongs = findTextMatches(filteredSongs, newFilter.text);
  }

  return { songs: filteredSongs, filter: newFilter };
};

export default songsFilter;
