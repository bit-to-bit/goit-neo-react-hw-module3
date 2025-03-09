import { positiveOptions } from '../../constants';
import clsx from 'clsx';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedbacks }) => {
  const totalPositiveFeedbacks = positiveOptions.reduce(
    (acc, option) => acc + feedback[option],
    0
  );

  const positiveFeedbackRatio =
    Math.round((totalPositiveFeedbacks / totalFeedbacks) * 100) + '%';

  return (
    <div className={clsx('container', css.feedback)}>
      {totalFeedbacks === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(feedback).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
            <tr className={css.total}>
              <td>Total</td>
              <td>{totalFeedbacks}</td>
            </tr>
            <tr>
              <td>Positive:</td>
              <td>{positiveFeedbackRatio}</td>
            </tr>
          </tbody>
        </table>

        // <ul className={css.feedback}>
        //   {Object.entries(feedback).map(([key, value]) => (
        //     <li key={key}>
        //       {key}: <span>{value}</span>
        //     </li>
        //   ))}
        //   <li className={css.total}>
        //     Total:<span>{totalFeedbacks}</span>
        //   </li>
        //   <li>
        //     Positive:<span>{positiveFeedbackRatio}</span>
        //   </li>
        // </ul>
      )}
    </div>
  );
};

export default Feedback;
