import Accordion from '@/components/accordions/Accordion';
import './AccordionGroup.scss';

const AccordionGroup = ({ accordions }) => {
  return (
    <div className='accordion-group'>
      {accordions.map((accordion, index) => {
        return (
          <Accordion
            key={accordion.id}
            index={index}
            size={accordions.length}
            title={accordion.title}
            content={accordion.content}
          />
        );
      })}
    </div>
  );
};

export default AccordionGroup;
