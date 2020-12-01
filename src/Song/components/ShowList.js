import React, { Suspense } from 'react';

import Spinner from '../../shared/UIElements/Spinner';

const Song = React.lazy(() => import('./Song'));

const ShowList = props => {
  console.log('[ShowList] render');

  return (
    <ul>
      {props.songs.map(song => (
        <li key={song._id}>
          <Suspense fallback={<Spinner />}>
            <Song song={song} />
          </Suspense>
        </li>
      ))}
    </ul>
  );
};

export default ShowList;
