import Header from '@/pages/home/components/Header';
import './Section.scss';

const Section = ({ header, children }) => {
  return (
    <section className='home-section'>
      <Header title={header.title} description={header.description} />
      {children}
    </section>
  );
};

export default Section;
