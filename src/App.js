import React, { Component } from "react";
import { FeedbackControls } from "./components/FeedbackWidget/FeedbackControls/FeedbackControls";
import { Section } from "./components/FeedbackWidget/Section/Section";
import { Statistics } from "./components/FeedbackWidget/Statistics/Statistics";
import { Notification } from "./components/FeedbackWidget/Notification/Notification";
import "./index.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  FeedbackOptions = (option) => {
    // console.log(this.state[option])
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  CountTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  CountPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.CountTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      FeedbackOptions,
      CountTotalFeedback,
      CountPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <Section title={"Please leave your feedback"}>
          <FeedbackControls
            options={Object.keys(this.state)}
            onButtonClick={FeedbackOptions}
          />
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
}

export default App;
