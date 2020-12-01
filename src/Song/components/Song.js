const Song = ({ song }) => {
  console.log('[Song] render');
  return (
    <div>
      <img
        src={'http://dev.pookie.one/images/small/' + song.imageName}
        alt={song.title}
      />
      <h1>{song.artist}</h1>
      <p>{song.title}</p>
    </div>
  );
};

export default Song;
