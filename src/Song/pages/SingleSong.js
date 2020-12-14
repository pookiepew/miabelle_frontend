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
      <div className='single-song__info'>
        <Image
          src={'https://images.miabelle.tv/large/' + song.imageName}
          alt={song.imageName}
        />
        <ul>
          <li>
            <h1 className='single-song__title'>Title: {song.title}</h1>
          </li>
          <li>
            <h2 className='single-song__artist'>Artist: {song.artist} </h2>
          </li>
          <li>
            <p className='single-song__mode'>Mode: {song.mode} </p>
          </li>
          <li>
            <p className='single-song__routine'>Routine: {song.routine} </p>
          </li>
          <li>
            <p className='single-song__game'>Game: {song.game} </p>
          </li>
          {song.difficulty && (
            <li>
              <p className='single-song__difficulty'>
                Difficulty: {song.difficulty}
              </p>
            </li>
          )}
          {song.effort && (
            <li>
              <p className='single-song__effort'>Effort: {song.effort} </p>
            </li>
          )}
        </ul>
      </div>
      {song.video && (
        <div className='single-song__video'>
          <iframe
            title={song.title}
            width='560'
            height='315'
            src={song.video}
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
