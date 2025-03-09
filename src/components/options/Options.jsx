import FeedbackButton from '../feedbackButton/FeedbackButton';
import { options } from '../../constants';
import ResetButton from '../resetButton/ResetButton';
import css from './Options.module.css';
import clsx from 'clsx';
const Options = ({
  handleClickFeedbackBtn,
  handleClickResetBtn,
  totalFeedbacks,
}) => {
  return (
    <div className={clsx('container', css.options)}>
      {options.map(option => (
        <FeedbackButton
          key={option.name}
          optionName={option.name}
          handleClick={handleClickFeedbackBtn}
        />
      ))}
      {totalFeedbacks > 0 && <ResetButton handleClick={handleClickResetBtn} />}
    </div>
  );
};

export default Options;
