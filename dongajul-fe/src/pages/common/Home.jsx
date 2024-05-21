import { fetchUsers } from '../../apis/users';
import Button from '../../components/Button';
import { userState } from '../../stores/testStores';
import './Home.scss';
import { useRecoilState } from 'recoil';

const Home = () => {
  const onClickButton = async () => {
    await fetchUsers();
  };

  const [user, setUser] = useRecoilState(userState);
  console.log('user', user);

  return (
    <div className='home'>
      <h1>Home 화면입니다.</h1>
      <Button text='데이터 조회' onClick={onClickButton} />
    </div>
  );
};

export default Home;
