import { useEffect } from 'react';

import { connect } from 'react-redux';

import { getAllSongs, filterSongs } from '../../shared/redux/actions/songs';

import songsFilter from '../../shared/functions/filterSongs';

import Filter from '../components/FilterSongs';
import Spinner from '../../shared/UIElements/Spinner';
import ScrollArrow from '../../shared/UIElements/ScrollArrow';
import ShowList from '../components/ShowList';

import './css/SongList.css';

const SongList = ({ dispatch, songs }) => {
  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  let songToFilter;

  if (!songs.loading) {
    if (songs.filtered.length === 0) {
      songToFilter = songs.all;
    } else {
      songToFilter = songs.filtered;
    }
  }

  const filterHandler = filter => {
    const result = songsFilter(songs, filter);
    dispatch(filterSongs(result.songs, result.filter));
  };

  return (
    <section className='songlist'>
      {!songs.loading && (
        <Filter
          songs={songToFilter}
          filterHandler={filterHandler}
          filter={songs.filter}
        />
      )}

      {songs.loading ? (
        <div className='songlist__spinner'>
          <Spinner />
          <h2>Fetching Songs</h2>
        </div>
      ) : (
        <ShowList songs={songToFilter} />
      )}
      <ScrollArrow />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);
