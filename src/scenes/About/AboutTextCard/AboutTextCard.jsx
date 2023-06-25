import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Umair Anser </span>
        from <span className={s.purple}> Lahore, Pakistan.</span>
        <br />
        Software engineer with expertise in Front End Development{' '}
        <br />
        using React JS.
        <br />
        <br />
        I have a Bachelor's degree in Computer Science 
        <br />
        from Sir Syed University of Engineering and Technology.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
