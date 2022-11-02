import { useState } from 'react'
import './App.css'
import Anecdote from './Anecdote'

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
   
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState([0,0,0,0,0,0,0]);

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    setSelected(randomIndex)
  }

  const voteAnecdote = () => {
    const points = [ ...votes ];
    points[selected] += 1;
    console.log(points)
    setVote(points)
    getMostVoted()
  }

  const getMostVoted = () => {
    const max = Math.max(...votes)
    return votes.indexOf(max)
  }

  return (
    <div className='wrapper'>
      <Anecdote title={"Anecdote of the Day"} anecdote={anecdotes[selected]} votes={votes[selected]} hasButtons={true} nextFunc={nextAnecdote} voteFunc={voteAnecdote} />
      <Anecdote title={"Anecdote with most votes"} anecdote={anecdotes[getMostVoted()]} votes={votes[getMostVoted()]} />
    </div>
  )
}

export default App