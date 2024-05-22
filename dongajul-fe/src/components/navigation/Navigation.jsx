import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import icon_user from '../../assets/icons/icon_user.svg';
import icon_notify from '../../assets/icons/icon_notify.svg';

const pageMenus = [
  { id: 'Home', path: '/', text: '홈' },
  { id: 'Mentors', path: '/mentors', text: '멘토찾기' },
  { id: 'Mentoring', path: '/mentoring', text: '멘토링' },
];

const authMenus = [
  { id: 'Login', path: '/login', text: '로그인' },
  { id: 'Signup', path: '/signup', text: '회원가입', end: true },
];

const Navigation = () => {
  return (
    <nav className='nav'>
      <section className='section section-logo'>
        <p>동아줄</p>
      </section>

      <section className='section section-menu'>
        <ul className='menu-container'>
          {pageMenus.map((menu) => (
            <li key={menu.id} className='menu-wrapper'>
              <NavLink to={menu.path} className='menu' activeclassname='active'>
                {menu.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      <section className='section section-user'>
        <div className='user-left'>
          <img src={icon_notify} alt='' className='icon notify'></img>
          <img src={icon_user} alt='' className='icon user'></img>
        </div>
        <div className='user-right'>
          <ul className='user-container'>
            {authMenus.map((auth) => (
              <li key={auth.id} className='user-wrapper'>
                <NavLink to={auth.path} activeclassname='active'>
                  {auth.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
