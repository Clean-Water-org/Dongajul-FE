import './Footer.scss';
import { NavLink } from 'react-router-dom';

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
        <p>동아줄</p>
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
        <p>Copyright © 2024 Ttokpaming ltd.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
