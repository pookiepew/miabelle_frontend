import Card from '../../shared/UIElements/Card';
import Image from '../../shared/UIElements/Image';

import helloEmote from '../../assets/emotes/hello.png';

import discord from '../../assets/icons/discord.png';
import instagram from '../../assets/icons/instagram.png';
import twitch from '../../assets/icons/twitch.png';
import twitter from '../../assets/icons/twitter.png';

const Socials = () => {
  return (
    <Card>
      <div className='card__header'>
        <Image className='card__image' src={helloEmote} alt='Hello Emote' />
        <h2 className='card__title'>Socials</h2>
      </div>
      <div className='card__body card__body-socials'>
        <ul className='card__body-list'>
          <li>
            <a
              className='card__body-listitem'
              href='https://www.twitch.com/xxmiabellexx/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image className='card__body-icon' src={twitch} alt='Twitch' />
              <p className='card__body-text big-text'>Twitch</p>
            </a>
          </li>
          <li>
            <a
              className='card__body-listitem'
              href='https://www.instagram.com/xxmiabellexx/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='card__body-icon'
                src={instagram}
                alt='Instagram'
              />
              <p className='card__body-text big-text'>Instagram</p>
            </a>
          </li>
        </ul>
        <ul className='card__body-list'>
          <li>
            <a
              className='card__body-listitem'
              href='https://discord.gg/vJkqnAB'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image className='card__body-icon' src={discord} alt='Discord' />
              <p className='card__body-text big-text'>Discord</p>
            </a>
          </li>

          <li>
            <a
              className='card__body-listitem'
              href='https://twitter.com/xxmiabellexx'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image className='card__body-icon' src={twitter} alt='Twitter' />
              <p className='card__body-text big-text'>Twitter</p>
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Socials;
