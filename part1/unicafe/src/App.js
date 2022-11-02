import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all] = useState([])
  const [percentage, setPercentage] = useState(0)


  const handleGoodFeedback = () => {
    setGood(good + 1);
    all.push(+1);
    calcPositivePercentage();
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
    all.push(0);
    calcPositivePercentage();
  }

  const handleBadFeedback = () => {
    setBad(bad + 1);
    all.push(-1);
    calcPositivePercentage();
  }

  const calcAll = () => {
    return all.reduce((acc, n) => acc + n, 0);
  }

  const calcAverage = () => {
    return calcAll() / all.length;
  }

  const calcPositivePercentage = () => {
    const positivePercentage = ( good / all.length ) * 100;
    setPercentage(positivePercentage)
  }

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button text="good" click={handleGoodFeedback} />
        <Button text="neutral" click={handleNeutralFeedback} />
        <Button text="bad" click={handleBadFeedback} />
        <Statistics goodValue={good} neutralValue={neutral} badValue={bad} allValue={all.length} averageValue={calcAverage()} percentageValue={percentage} />
      </div>
    </>
  )
}

export default App