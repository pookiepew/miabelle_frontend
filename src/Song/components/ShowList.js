import React, { Suspense } from 'react';

import Spinner from '../../shared/UIElements/Spinner';

const Song = React.lazy(() => import('./Song'));

const ShowList = props => {
  console.log('[ShowList] render');

  return (
    <Suspense fallback={<Spinner />}>
      <ul>
        {props.songs.map(song => (
          <li key={song._id}>
            <Song song={song} />
          </li>
        ))}
      </ul>
    </Suspense>
  );
};

export default ShowList;
