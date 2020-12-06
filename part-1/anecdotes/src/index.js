import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const MostVotedAnecdote = (props) => {
  let curmax = props.votes[0];
  let max = 0;
  for(let i=1; i<props.votes.length; i++){
    if (props.votes[i] > curmax){
      curmax=props.votes[i];
      max=i;
    }
  }
  return (
    <>
    <h1>anecdote with the most votes</h1>
      {props.anecdotes[max]};
      <p>has {props.votes[max]} {props.votes[max]===1 ? 'vote' : 'votes'}.</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const toggleVoteClick = () => {
    let updatedVotes = [...votes];
    updatedVotes[selected]++;
    setVotes(updatedVotes);
  }

  return (
    
    <div>
      <h1>anecdote of the day</h1>
      {props.anecdotes[selected]};
      <p>has {votes[selected]} {votes[selected]===1 ? 'vote' : 'votes'}.</p>
      <Button onClick={() => toggleVoteClick()} text='vote'/>
      <Button onClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length-0)))} text='next anecdote'/>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)