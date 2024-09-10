import { LABEL_COLOR, LABEL_SIZE, LABEL_TYPE } from '@/constants/label';
import Label from '@/components/labels/Label';
import './LabelGroup.scss';

const LabelGroup = ({ labels, selected, onClick = () => {} }) => {
  return (
    <div className='label-group'>
      {labels.map((label) => {
        return (
          <Label
            key={label.id}
            text={label.text}
            size={label.size || LABEL_SIZE.MEDIUM}
            color={
              label.id === selected
                ? LABEL_COLOR.DEFAULT
                : label.color || LABEL_COLOR.GRAYSCALE
            }
            type={
              label.id === selected
                ? LABEL_TYPE.GHOST
                : label.type || LABEL_TYPE.GHOST
            }
            onClick={() => onClick(label.id)}
          />
        );
      })}
    </div>
  );
};

export default LabelGroup;
