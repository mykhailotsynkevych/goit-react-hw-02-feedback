import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
      <div className={s.container}>
        <h1>Please leave feedback</h1>
        <button type="button" className={s.button} onClick={onLeaveFeedback[0]}>
          Good
        </button>
        <button type="button" className={s.button} onClick={onLeaveFeedback[1]}>
          Neutral
        </button>
        <button type="button" className={s.button} onClick={onLeaveFeedback[2]}>
          Bad
        </button>
        </div>
    )

}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired),
};

export default FeedbackOptions;