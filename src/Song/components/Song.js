import { Link } from 'react-router-dom';

import Image from '../../shared/UIElements/Image';

import './css/Song.css';

const Song = ({ song }) => {
  console.log('[Song] render');

  let title = song.title;
  let artist = song.artist;

  if (title.length > 15) {
    const titleSplit = title.split(' ', 3);
    if (titleSplit.length === 3) {
      title = titleSplit[0] + ' ' + titleSplit[1] + ' ' + titleSplit[2] + '...';
    } else {
      title = titleSplit[0] + ' ' + titleSplit[1] + '...';
    }
  }
  if (artist.length > 15) {
    const artistSplit = artist.split(' ', 2);
    artist = artistSplit[0] + artistSplit[1] + '...';
  }

  return (
    <div className='song'>
      <Link to={`/song/${song._id}`}>
        <Image
          className='song__image'
          src={'https://images.miabelle.tv/small/' + song.imageName}
          alt={song.title}
        />
      </Link>
      <h1 className='song__title'>{title}</h1>
      <p className='song__artist'>{artist}</p>
    </div>
  );
};

export default Song;
