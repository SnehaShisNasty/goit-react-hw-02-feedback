import './FeedbackOptions.css';

export const FeedbackOptions = ({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) => {
  return (
    <div className="container">
      <ul className="list">
        <li className="item">
          <button className="button good" onClick={handleIncrementGood}>
            good
          </button>
        </li>
        <li className="item">
          <button className="button neutral" onClick={handleIncrementNeutral}>
            neutral
          </button>
        </li>
        <li className="item">
          <button className="button bad" onClick={handleIncrementBad}>
            bad
          </button>
        </li>
      </ul>
    </div>
  );
};
