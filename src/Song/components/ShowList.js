import Song from './Song';

const ShowList = props => {
  console.log('[ShowList] render');

  return (
    <ul>
      {props.songs.map(song => (
        <li key={song._id}>
          <Song song={song} />
        </li>
      ))}
    </ul>
  );
};

export default ShowList;
