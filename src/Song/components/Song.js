import Image from '../../shared/UIElements/Image';

const Song = ({ song }) => {
  console.log('[Song] render');
  return (
    <div>
      <Image
        src={'https://images.miabelle.tv/small/' + song.imageName}
        alt={song.title}
      />
      <h1>{song.title}</h1>
      <p>{song.artist}</p>
    </div>
  );
};

export default Song;
