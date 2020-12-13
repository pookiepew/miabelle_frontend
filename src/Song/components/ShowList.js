import { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import Song from './Song';

const ShowList = ({ songs }) => {
  console.log('[ShowList] render');

  let moreSongsToLoad = true;

  const [filteredSongs, setFilteredSongs] = useState([]);

  const loadMoreSongs = amount => {
    setFilteredSongs(songs.slice(0, filteredSongs.length + amount));
  };

  useEffect(() => {
    if (songs.length > 0) setFilteredSongs(songs.slice(0, 20));
    if (songs.length === 0) setFilteredSongs([]);
  }, [songs]);

  if (songs.length === filteredSongs.length) moreSongsToLoad = false;

  return (
    <InfiniteScroll
      dataLength={filteredSongs.length}
      next={() => loadMoreSongs(20)}
      hasMore={moreSongsToLoad}
      loader={<h4>Loading...</h4>}
      hasChildren={true}
    >
      <ul>
        {filteredSongs.map(song => (
          <li key={song._id}>
            <Song song={song} />
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default ShowList;
