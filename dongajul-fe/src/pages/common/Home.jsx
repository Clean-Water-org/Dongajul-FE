import Fab from '@/components/fab/Fab';
import Slider from '@/components/slider/Slider';
import banner1 from '@/assets/img/main_banner_1.png';
import banner2 from '@/assets/img/main_banner_2.jpg';
import banner3 from '@/assets/img/main_banner_3.jpg';
import './Home.scss';

const images = [banner1, banner2, banner3];

const Home = () => {
  return (
    <div className="home">
      <Slider images={images} />
      <Fab />
    </div>
  );
};

export default Home;
