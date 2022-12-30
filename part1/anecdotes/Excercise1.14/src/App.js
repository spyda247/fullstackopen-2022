import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const AnecdotesOfTheDay = ({ selected, anecdotes, votes }) => {
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]} <br /> has {votes[selected]} votes.</p>
    </div>
  )
}

const AnecdotesWithMostVotes = ({ anecdotes, votes }) => {
  const maxVoteIndex = votes.indexOf(Math.max(...votes))
  return (
    <div>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[maxVoteIndex]} <br /> has {votes[maxVoteIndex]} votes.</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // prefill an array of zeros
  const arr = Array(anecdotes.length).fill(0)
  // random number between min and max
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const [votes, setVotes] = useState(arr)
  const [selected, setSelected] = useState(5)

  const handleAnecdoteClick = () => {
    const random = getRandomNumber(0, anecdotes.length)
    setSelected(random)
  }
  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  return (
    <div>
      <AnecdotesOfTheDay selected={selected} anecdotes={anecdotes} votes={votes} />

      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleAnecdoteClick} text="next anecdote" />

      <AnecdotesWithMostVotes anecdotes={anecdotes} votes={votes} />
    </div>

  )
}

export default App;
