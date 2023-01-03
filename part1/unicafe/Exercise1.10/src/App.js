import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
    
  )
}
const Statistics = ({ good, neutral, bad, all, average, positive }) => {

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const computeDerivedStats = (good, neutral, bad) => {
    const all = good + neutral + bad
    let average = 0
    let positive = 0

    if (all !== 0) {
      average = (all / 3)
      positive = `${(good / all) * 100}%`
    }
    return {
      all,
      average,
      positive
    }
  }

  const { all, average, positive } = computeDerivedStats(good, neutral, bad)

  return (
    <div>
      <h1>give feedback</h1>

      <Button
        onClick={() => setGood(good + 1)}
        text="good"
      />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        text="neutral"
      />
      <Button
        onClick={() => setBad(bad + 1)}
        text="bad"
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )

}

export default App;
