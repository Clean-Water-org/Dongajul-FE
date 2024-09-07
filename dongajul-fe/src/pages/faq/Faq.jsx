import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LABEL_SIZE } from '@/constants/label';
import Header from '@/components/Header/Header';
import LabelGroup from '@/components/labels/LabelGroup';
import AccordionGroup from '@/components/accordions/AccordionGroup';
import './Faq.scss';

const Faq = () => {
  const [label, setLabel] = useState('all');

  const labels = [
    {
      id: 'all',
      text: '전체',
      size: LABEL_SIZE.LARGE,
    },
    {
      id: 'mentor',
      text: '멘토',
      size: LABEL_SIZE.LARGE,
    },
    {
      id: 'mentee',
      text: '멘티',
      size: LABEL_SIZE.LARGE,
    },
    {
      id: 'etc',
      text: '기타',
      size: LABEL_SIZE.LARGE,
    },
  ];

  const onClickLabel = (id) => {
    setLabel(id);
  };

  const accordions = [
    {
      id: 1,
      title: '(1) 멘토 목록은 어디에서 조회할 수 있나요?',
      content: '이런 저런 답변입니다.',
    },
    {
      id: 2,
      title: '(2) 멘토링 일정을 조정하고 싶어요. 어떻게 해야 하나요?',
      content: '이런 저런 답변입니다.',
    },
    {
      id: 3,
      title: '(3) 동아줄 이용 요금은 얼마인가요?',
      content: '이런 저런 답변입니다.',
    },
    {
      id: 4,
      title: '(4) 멘토링이 불만족스러워요. 어떻게 대응해야 하나요?',
      content: '이런 저런 답변입니다.',
    },
    {
      id: 5,
      title: '(5) 결제한 멘토링 비용을 환불할 수 있나요?',
      content: '이런 저런 답변입니다.',
    },
  ];

  return (
    <div>
      <Header
        title='자주 묻는 질문'
        description='문의하기를 통해 자주 묻는 질문을 모아두었습니다.'
      />
      <div className='faq'>
        <div className='faq-container'>
          <LabelGroup labels={labels} selected={label} onClick={onClickLabel} />
          <AccordionGroup accordions={accordions} />
        </div>
        <div className='faq-footer'>
          <span className='icon-question'>궁금하신 점이 있으신가요?</span>
          <NavLink to='/qna' className='qna-link'>
            문의하기
          </NavLink>
          <span>페이지에서 1:1 대응을 도와드리겠습니다.</span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
