import './Statistics.css';
export const Statistics = ({ result, total, positive }) => {
  const { good, neutral, bad } = result;
  return (
    <div className="Statistics">
      <h2 className="title"> Statistics</h2>
      <ul className="list">
        <li className="item">
          <p className="subTitle">Good:{good}</p>
        </li>
        <li className="item">
          <p className="subTitle">Neutral:{neutral}</p>
        </li>
        <li className="item">
          <p className="subTitle">Bad:{bad}</p>
        </li>
      </ul>
      <h3 className="subTitle">Total:{total}</h3>
      <h3 className="subTitle">Positive feedback:{positive}%</h3>
    </div>
  );
};
