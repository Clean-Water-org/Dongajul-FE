import './Footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/img/logo_grayscale.png';

const links = [
  { id: 'information', path: '/information', text: 'INFORMATION' },
  { id: 'notice', path: '/notice', text: 'NOTICE' },
  { id: 'faq', path: '/faq', text: 'FAQ' },
  { id: 'agreement', path: '/agreement', text: 'AGREEMENT' },
  {
    id: 'privacy-policy',
    path: '/privacy-policy',
    text: 'PRIVACY POLICY',
    end: true,
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='footer-links'>
        <ul>
          {links.map((link) => (
            <li key={link.id} className='link-item'>
              <NavLink to={link.path} activeclassname='active'>
                <span>{link.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='footer-copyright'>
        <p>Copyright © 2024 Dongajul Clean-water.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
