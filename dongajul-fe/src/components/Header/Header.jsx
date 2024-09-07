import './Header.scss';

const Header = ({ title, description }) => {
  return (
    <section className='section-header'>
      <div className='header-container'>
        <h1 className='title'>{title}</h1>
        {!!description && <span className='description'>{description}</span>}
      </div>
    </section>
  );
};

export default Header;
