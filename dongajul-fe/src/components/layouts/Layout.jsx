import Footer from '@/components/footer/Footer';
import Navigation from '@/components/navigation/Navigation';
import classNames from 'classnames';

import './Layout.scss';

const Layout = ({ page, main = false }) => {
  return (
    <div>
      <Navigation />
      <div className={classNames('body', `body-${main ? 'main' : 'default'}`)}>
        {page}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
