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

  let songsToFilter;
  let songsToRender = [];

  if (!songs.loading) {
    if (songs.filtered.length === 0) {
      songsToFilter = songs.all;
      songsToRender = songs.all;
      if (songs.filter.text || songs.filter.mode || songs.filter.routine) {
        songsToRender = [];
      }
    } else {
      songsToFilter = songs.filtered;
      songsToRender = songs.filtered;
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
          songs={songsToFilter}
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
        <ShowList songs={songsToRender} />
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
