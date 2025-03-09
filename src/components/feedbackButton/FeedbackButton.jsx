const FeedbackButton = ({ optionName, handleClick }) => {
  return <button onClick={() => handleClick(optionName)}>{optionName}</button>;
};

export default FeedbackButton;
