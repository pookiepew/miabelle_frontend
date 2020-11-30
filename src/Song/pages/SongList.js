import { useEffect } from 'react';

import { connect } from 'react-redux';

import { getAllSongs, filterSongs } from '../../shared/redux/actions/songs';

import songsFilter from '../../shared/functions/filterSongs';

import Filter from '../components/FilterSongs';
import Spinner from '../../shared/UIElements/Spinner';
import ShowList from '../components/ShowList';

const SongList = ({ dispatch, songs }) => {
  console.log('[SongList] render');

  useEffect(() => {
    console.log('[SongList] getting songs');
    dispatch(getAllSongs());
  }, [dispatch]);

  let songsToFilter;

  if (!songs.loading) {
    if (songs.filtered.length === 0) {
      songsToFilter = songs.all;
    } else {
      songsToFilter = songs.filtered;
    }
  }

  const filterHandler = filter => {
    const result = songsFilter(songs, filter);
    dispatch(filterSongs(result.songs, result.filter));
  };

  return (
    <section>
      {!songs.loading && (
        <Filter songs={songsToFilter} filterHandler={filterHandler} />
      )}
      {songs.loading ? <Spinner /> : <ShowList songs={songs.all} />}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);
