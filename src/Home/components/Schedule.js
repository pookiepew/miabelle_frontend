import Card from '../../shared/UIElements/Card';
import Image from '../../shared/UIElements/Image';

import hypeEmote from '../../assets/emotes/hype.png';

import './css/Schedule.css';

const Shedule = () => {
  return (
    <Card>
      <div className='card__header'>
        <Image className='card__image' src={hypeEmote} alt='Hype Emote' />
        <h2 className='card__title'>Schedule</h2>
      </div>
      <div className='card__body'>
        <h2 className='card__body-text big-text'>Fridays at 7 PM CET</h2>
        <p className='card__body-text'>
          I will let you know on discord if there is any changes on my schedule.
        </p>
      </div>
    </Card>
  );
};

export default Shedule;
