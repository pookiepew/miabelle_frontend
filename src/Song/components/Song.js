import React, { Suspense } from 'react';

import Spinner from '../../shared/UIElements/Spinner';

const Image = React.lazy(() => import('../../shared/UIElements/Image'));

const Song = ({ song }) => {
  console.log('[Song] render');
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Image
          src={'https://images.miabelle.tv/images/small/' + song.imageName}
          alt={song.title}
        />
      </Suspense>
      <h1>{song.artist}</h1>
      <p>{song.title}</p>
    </div>
  );
};

export default Song;
