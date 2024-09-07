import Fab from '@/components/fab/Fab';
import Slider from '@/components/sliders/Slider';
import banner0 from '@/assets/img/main_banner_0.png';
import banner1 from '@/assets/img/main_banner_1.png';
import banner2 from '@/assets/img/main_banner_2.png';
import banner3 from '@/assets/img/main_banner_3.png';
import userImage from '@/assets/img/user.png';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import Section from '@/pages/home/components/Section';
import CardProfileVariant5 from '@/components/cards/profiles/CardProfileVariant5';
import CardReview from '@/components/cards/reviews/CardReview';

const images = [banner0, banner1, banner2, banner3];

const Home = () => {
  const navigate = useNavigate();

  const onClickFab = () => {
    navigate('/faq');
  };

  const headers = {
    mentor: {
      title: '인기 멘토 리스트',
      description: '현재 많은 멘티들이 선택한 멘토들이에요',
    },
    review: {
      title: '최신 리뷰 목록',
      description: '멘토들의 실시간 후기를 들어보세요',
    },
  };

  const mentors = [
    {
      id: 1,
      title: { primary: 'Amazon', secondary: 'IT개발 / 데이터 7년차' },
      image: null,
      name: '홍길동',
      certified: true,
      content:
        '안녕하세요 국내 IT 대기업에서 3년 간 근무하다 Amazon으로 이직한 홍길동입니다. Vision Al, 머신러닝등 여러 프로젝트를 리딩한 경험이 있습니다. 이직, 해외 취업 등 여러 고민을 함께 나눠보아요',
    },
    {
      id: 2,
      title: { primary: 'SAMSUNG', secondary: '인공지능 / 데이터 7년차' },
      image: null,
      name: '박지현',
      certified: true,
      content:
        '안녕하세요, 저는 8년차 인공지능 연구원으로 일하고 있는 박지현입니다. 자연어 처리 및 컴퓨터 비전 분야에서 다양한 연구 프로젝트를 수행해왔습니다. 이직, 해외 취업 등 여러 고민을 함께 나눠보아요',
    },
    {
      id: 3,
      title: { primary: '현대캐피탈', secondary: 'IT개발 / 데이터 7년차' },
      image: null,
      name: '김준서',
      certified: false,
      content:
        '안녕하세요, 저는 8년차 시스템 엔지니어로 일하고 있는 정지민입니다. 네트워크 및 서버 인프라 구축 및 관리에 경험이 있습니다. 이직, 해외 취업 등 여러 고민을 함께 나눠보아요.',
    },
    {
      id: 4,
      title: { primary: 'KAKAO', secondary: 'IT개발 / 데이터 7년차' },
      image: null,
      name: '윤지원',
      certified: false,
      content:
        '안녕하세요, 저는 5년차 소프트웨어 개발자로 일하고 있는 윤지원입니다. 웹 개발 및 모바일 애플리케이션 개발에 전문화되어 있습니다. 이직, 해외 취업 등 여러 고민을 함께 나눠보아요.',
    },
    {
      id: 5,
      title: { primary: '현대캐피탈', secondary: 'IT개발 / 데이터 7년차' },
      image: null,
      name: '김준서',
      certified: true,
      content:
        '안녕하세요, 저는 8년차 시스템 엔지니어로 일하고 있는 정지민입니다. 네트워크 및 서버 인프라 구축 및 관리에 경험이 있습니다. 이직, 해외 취업 등 여러 고민을 함께 나눠보아요.',
    },
    {
      id: 6,
      title: { primary: 'KAKAO', secondary: 'IT개발 / 데이터 7년차' },
      image: null,
      name: '윤지원',
      certified: false,
      content:
        '안녕하세요, 저는 5년차 소프트웨어 개발자로 일하고 있는 윤지원입니다. 웹 개발 및 모바일 애플리케이션 개발에 전문화되어 있습니다. 이직, 해외 취업 등 여러 고민을 함께 나눠보아요.',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: '홍길동',
      rating: 4.5,
      title: '최고의 동아줄!',
      content:
        '지금까지 멘토링 진행하면서 직접 줌미팅을 생성해야 했는데 동아줄에서는 그러지 않아도 돼서 편하고 시간 조율도 할 필요가 없으니 너무 편했습니다 ㅎㅎ 어쩌고 저쩌고 더 길게 써보자 어쩌고 저쩌고 더 길게 써보자',
      createdAt: '2024-08-01',
      comment: {
        name: '최준서',
        image: null,
        content: '도움이 되었다니 뿌듯합니다.dsdsdsdaㅇㄴㅇㄴ',
      },
    },
    {
      id: 2,
      name: '홍길동',
      rating: 3.3,
      title: '최고의 동아줄!',
      content:
        '지금까지 멘토링 진행하면서 직접 줌미팅을 생성해야 했는데 동아줄에서는 그러지 않아도 돼서 편하고 시간 조율도 할 필요가 없으니 너무 편했습니다 ㅎㅎ',
      createdAt: '2024-08-01',
      comment: {
        name: '최준서',
        image: null,
        content: '도움이 되었다니 뿌듯합니다.',
      },
    },
    {
      id: 3,
      name: '홍길동',
      rating: 4.1,
      title: '최고의 동아줄!',
      content:
        '지금까지 멘토링 진행하면서 직접 줌미팅을 생성해야 했는데 동아줄에서는 그러지 않아도 돼서 편하고 시간 조율도 할 필요가 없으니 너무 편했습니다 ㅎㅎ',
      createdAt: '2024-08-01',
      comment: {
        name: '최준서',
        image: null,
        content: '도움이 되었다니 뿌듯합니다.',
      },
    },
    {
      id: 4,
      name: '홍길동',
      rating: 2.3,
      title: '최고의 동아줄!',
      content:
        '지금까지 멘토링 진행하면서 직접 줌미팅을 생성해야 했는데 동아줄에서는 그러지 않아도 돼서 편하고 시간 조율도 할 필요가 없으니 너무 편했습니다 ㅎㅎ',
      createdAt: '2024-08-01',
      comment: {
        name: '최준서',
        image: null,
        content: '도움이 되었다니 뿌듯합니다.',
      },
    },
    {
      id: 5,
      name: '홍길동',
      rating: 0.5,
      title: '최고의 동아줄!',
      content:
        '지금까지 멘토링 진행하면서 직접 줌미팅을 생성해야 했는데 동아줄에서는 그러지 않아도 돼서 편하고 시간 조율도 할 필요가 없으니 너무 편했습니다 ㅎㅎ',
      createdAt: '2024-08-01',
      comment: {
        name: '최준서',
        image: null,
        content: '도움이 되었다니 뿌듯합니다.',
      },
    },
  ];

  return (
    <div className='home'>
      <Slider images={images} />
      <div className='home-container'>
        <Section header={headers.mentor}>
          <div className='cards-mentor'>
            {mentors.map((mentor, i) => {
              return <CardProfileVariant5 key={i} {...mentor} />;
            })}
          </div>
        </Section>
        <Section header={headers.review}>
          <div className='cards-review'>
            {reviews.map((review, i) => {
              return <CardReview key={i} {...review} />;
            })}
          </div>
        </Section>
      </div>
      <Fab onClick={onClickFab} />
    </div>
  );
};

export default Home;
