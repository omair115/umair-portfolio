import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a Senior Frontend Developer with 4 years of
              experience <br />
              I have a strong passion for creating beautiful and
              functional Web Apps <br />
              and enjoy working with the latest web development
              technologies.
            </p>

            <p>
              I am fluent in classics like{' '}
              <i>
                <b className={s.purple}>
                  TypeScript, React JS , StoryBook <br />
                  JavaScript , Node JS , Redux Saga
                </b>
              </i>
            </p>

            <p>
              My field of Interest's are building new Web Technologies
              and Products
              <br /> and also in areas related to{' '}
              <i>
                <b className={s.purple}>
                  High data processing <br /> and Microservices
                  Architectures.
                </b>
              </i>
            </p>

            <p>
              Whenever possible, I also apply my passion for
              developing
              <br />
              products with Node.js and Modern Javascript Library{' '}
              <br />
              and Frameworks like
              <br />
              <i>
                <b className={s.purple}>Next.js</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/omair115"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/profile.php?id=100012554593397"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/umair-anser-4baa37120/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
