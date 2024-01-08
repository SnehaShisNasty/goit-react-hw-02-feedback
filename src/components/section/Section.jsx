import { FeedbackOptions } from '../feedbackOptions/FeedbackOptions';
import { Statistics } from '../statistics/Statistics';
import { Notification } from '../notification/Notification';
import css from './Section.module.css';
export const Section = ({
  positive,
  total,
  title,
  handleIncrementFeedback,
  good,
  bad,
  neutral,
  result,
}) => {
  return (
    <section className={css.feedback}>
      <h1 className={css.title}> {title}</h1>
      <FeedbackOptions
        handleIncrementFeedback={handleIncrementFeedback}
        result={Object.keys(result)}
      ></FeedbackOptions>
      {total === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Statistics
          result={result}
          total={total}
          positive={positive}
        ></Statistics>
      )}
    </section>
  );
};
