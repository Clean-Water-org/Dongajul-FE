import { NavLink } from 'react-router-dom';
import logo from '@/assets/img/logo_color.png';
import './Navigation.scss';
import { useNavigate } from 'react-router-dom';

const pageMenus = [
  { id: 'Home', path: '/', text: '홈' },
  { id: 'Mentors', path: '/mentors', text: '멘토찾기' },
  { id: 'Mentoring', path: '/mentoring', text: '멘토링' },
];

const authMenus = [
  { id: 'Login', path: '/login', text: '로그인' },
  { id: 'Signup', path: '/login?signup=true', text: '회원가입' },
];

const Navigation = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <nav className='nav'>
      <section className='section section-logo' onClick={onClickLogo}>
        <img src={logo} alt='logo' />
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
        <div className='notify'></div>
        <NavLink to='/' activeclassname='active'>
          마이페이지
        </NavLink>
        <ul className='user-container'>
          {authMenus.map((auth) => (
            <li key={auth.id} className='user-wrapper'>
              <NavLink to={auth.path}>{auth.text}</NavLink>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navigation;
