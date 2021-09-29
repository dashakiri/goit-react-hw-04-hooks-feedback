import { useState } from "react";
import { FeedbackControls } from "./components/FeedbackWidget/FeedbackControls/FeedbackControls";
import { Section } from "./components/FeedbackWidget/Section/Section";
import { Statistics } from "./components/FeedbackWidget/Statistics/Statistics";
import { Notification } from "./components/FeedbackWidget/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  function FeedbackOptions(option) {
    switch (option) {
      case "good":
        return setGood(good + 1);
      case "neutral":
        return setNeutral(neutral + 1);
      case "bad":
        return setBad(bad + 1);
      default:
        return;
    }
  }

  function CountTotalFeedback() {
    return good + neutral + bad;
  }

  function CountPositiveFeedbackPercentage() {
    const total = CountTotalFeedback();
    return Math.round((good / total) * 100);
  }

  return (
    <>
      <Section title={"Please leave your feedback"}>
        <FeedbackControls options={options} onButtonClick={FeedbackOptions} />
      </Section>
      <Section title={"Statistics"}>
        {CountTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={CountTotalFeedback()}
            positiveFeedback={CountPositiveFeedbackPercentage()}
          />
        )}
        {CountTotalFeedback() === 0 && (
          <Notification message={"No feedback given"} />
        )}
      </Section>
    </>
  );
}
