import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import './Section.css';
export const Section = ({
  handleIncrementBad,
  handleIncrementGood,
  handleIncrementNeutral,
  positive,
  total,
  result,
  title,
}) => {
  return (
    <section className="feedback">
      <h1 className="title"> {title}</h1>
      <FeedbackOptions
        handleIncrementGood={handleIncrementGood}
        handleIncrementNeutral={handleIncrementNeutral}
        handleIncrementBad={handleIncrementBad}
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
