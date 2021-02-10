import './css/TwitchChatMods.css';

const TwitchChatMods = ({ show }) => {
  return <h1 className={show ? 'block' : 'hide'}>TwitchChatMods</h1>;
};

export default TwitchChatMods;
