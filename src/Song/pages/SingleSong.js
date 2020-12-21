import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Image from '../../shared/UIElements/Image';

import './css/SingleSong.css';

const SingleSong = ({ songs }) => {
  let { id } = useParams();
  const song = songs.all.filter(song => song._id === id)[0];
  console.log(song);

  return (
    <section>
      <div
        className={
          song.video
            ? 'single-song__info'
            : 'single-song__center single-song__info'
        }
      >
        <Image
          src={'https://images.miabelle.tv/large/' + song.imageName}
          alt={song.imageName}
        />
        <div className='single-song__lists'>
          <ul>
            <li className='single-song__list-item'>
              <h1 className='single-song__heading'>Title: </h1>
              <p className='single-song__title'>{song.title}</p>
            </li>
            <li className='single-song__list-item'>
              <h2 className='single-song__heading'>Artist:</h2>
              <p className='single-song__artist'>{song.artist}</p>
            </li>
          </ul>
          <ul>
            <li className='single-song__list-item'>
              <p className='single-song__info-text single-song__mode'>
                Mode: {song.mode}
              </p>
            </li>
            <li className='single-song__list-item'>
              <p className='single-song__info-text single-song__routine'>
                Routine: {song.routine}
              </p>
            </li>
            <li className='single-song__list-item'>
              <p className='single-song__info-text single-song__game'>
                Game: {song.game}
              </p>
            </li>
            {song.difficulty && (
              <li className='single-song__list-item'>
                <p className='single-song__info-text single-song__difficulty'>
                  Difficulty: {song.difficulty}
                </p>
              </li>
            )}
            {song.effort && (
              <li>
                <p className='single-song__info-text single-song__effort'>
                  Effort: {song.effort}
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>

      {song.video && (
        <div className='single-song__video'>
          <iframe
            className='single-song__iframe'
            title={song.title}
            src={`https://www.youtube.com/embed/${song.video}`}
            allow=''
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SingleSong);
