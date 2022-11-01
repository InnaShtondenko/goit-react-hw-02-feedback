import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './common/Section/Section.styled';
import { Statistics } from './FeedbackStatistics/FeedbackStatistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;
  positivePercentage = null;

  calcPositivePercentage() {
    const { good } = this.state;
    const { total } = this;

    if (!total) return;

    this.positivePercentage = parseInt((good / total) * 100);
  }

  calcTotalNumberFeedbacks() {
    const { good, neutral, bad } = this.state;

    this.total = good + neutral + bad;
  }

  onFeedbackOptClicked = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  onRender() {
    this.calcTotalNumberFeedbacks();
    this.calcPositivePercentage();
  }

  render() {
    this.onRender();
    const { good, neutral, bad } = this.state;
    const { total, positivePercentage } = this;

    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onFeedbackOptClicked}
          />
        </Section>

        <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
        </Section>
      </>
    );
  }
}