import Song from './Song';

const ShowList = props => {
  console.log('[ShowList] render');

  return (
    <ul>
      {props.songs.map(song => (
        <Song key={song._id} song={song} />
      ))}
    </ul>
  );
};

export default ShowList;
