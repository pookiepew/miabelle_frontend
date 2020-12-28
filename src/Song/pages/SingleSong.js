import { useEffect } from 'react';

import { connect } from 'react-redux';
import { getSingleSong } from '../../shared/redux/actions/songs';
import { useParams } from 'react-router-dom';

import Image from '../../shared/UIElements/Image';
import Spinner from '../../shared/UIElements/Spinner';

import './css/SingleSong.css';

const SingleSong = ({ dispatch, songs }) => {
  let { id } = useParams();

  useEffect(() => {
    dispatch(getSingleSong(id));
  }, [dispatch]);

  const song = songs.single;

  return (
    <section>
      {songs.loading && (
        <div className={'songlist__spinner songlist__spinner-medium'}>
          <Spinner />
        </div>
      )}
      {!songs.loading && (
        <>
          <div className={'single-song__header'}>
            <h1>
              <span>Title:</span> {song.title}
            </h1>
            <h2>
              <span>Artist:</span> {song.artist}
            </h2>
          </div>
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
              <ul className='single-song__title-artist'>
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
                  <p className='single-song__info-text single-song__routine'>
                    <span className='single-song__info-heading'>Routine</span>
                    {': '}
                    {song.routine}
                  </p>
                </li>
                <li className='single-song__list-item'>
                  <p className='single-song__info-text single-song__mode'>
                    <span className='single-song__info-heading'>Mode</span>
                    {': '}
                    {song.mode}
                  </p>
                </li>

                <li className='single-song__list-item'>
                  <p className='single-song__info-text single-song__game'>
                    <span className='single-song__info-heading'>Game</span>
                    {': '}
                    {song.game}
                  </p>
                </li>
                {song.effort && (
                  <li>
                    <p className='single-song__info-text single-song__effort'>
                      <span className='single-song__info-heading'>Effort</span>
                      {': '}
                      {song.effort}
                    </p>
                  </li>
                )}
                {song.difficulty && (
                  <li className='single-song__list-item'>
                    <p className='single-song__info-text single-song__difficulty'>
                      <span className='single-song__info-heading'>
                        Difficulty
                      </span>
                      {': '}
                      {song.difficulty}
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
        </>
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
