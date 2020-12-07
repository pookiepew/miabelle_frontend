import Schedule from './components/Schedule';
import Socials from './components/Socials';

import './Home.css';

const Home = () => {
  return (
    <section className='home-section'>
      <Schedule />
      <Socials />
    </section>
  );
};

export default Home;
