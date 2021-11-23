import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__info}>
        <span className={s.text}>copyright © </span> &nbsp;
        <a
          href="https://github.com/Nikolayhous"
          className={s.link}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Nikolayhous.
        </a>
        &nbsp;
        <span className={s.text}>All right reserved. || Privacy statement</span>
      </div>
    </div>
  );
};

export default Footer;
