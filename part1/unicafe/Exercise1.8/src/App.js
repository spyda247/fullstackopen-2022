import { useState } from 'react'

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
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
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
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
