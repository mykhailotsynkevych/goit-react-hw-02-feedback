import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <div>
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

export default FeedbackOptions;