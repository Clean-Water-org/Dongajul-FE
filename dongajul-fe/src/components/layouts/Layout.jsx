import Footer from '@/components/footer/Footer';
import Navigation from '@/components/navigation/Navigation';
import './Layout.scss';

const Layout = ({ page, main = false }) => {
  return (
    <div>
      <Navigation />
      <div className={`body body-${main ? 'main' : 'default'}`}>{page}</div>
      <Footer />
    </div>
  );
};

export default Layout;
