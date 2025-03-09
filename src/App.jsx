import Description from './components/description/Description';
import Feedback from './components/feedback/Feedback';
import Options from './components/options/Options';
import { useState, useEffect } from 'react';
import { feedbackInitialState, allOptions } from './constants';

const App = () => {
  const getFeedbackInitialState = () => {
    const localData = localStorage.getItem('feedback');
    if (localData) {
      return JSON.parse(localData);
    }
    return feedbackInitialState;
  };

  const [feedback, setFeedback] = useState(getFeedbackInitialState);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleClickFeedbackBtn = optionName => {
    setFeedback({
      ...feedback,
      [optionName]: feedback[optionName] + 1,
    });
  };

  const handleClickResetBtn = () => {
    setFeedback(feedbackInitialState);
  };

  const totalFeedbacks = allOptions.reduce(
    (acc, option) => acc + feedback[option],
    0
  );
  return (
    <>
      <Description />

      <Options
        handleClickFeedbackBtn={handleClickFeedbackBtn}
        handleClickResetBtn={handleClickResetBtn}
        totalFeedbacks={totalFeedbacks}
      />

      <Feedback feedback={feedback} totalFeedbacks={totalFeedbacks} />
    </>
  );
};

export default App;
