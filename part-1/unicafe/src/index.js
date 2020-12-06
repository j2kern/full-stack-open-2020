import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => {
  return (
    <>
    <table>
      <tbody>
        <tr>
          <td width="90">{props.text} </td><td>{props.value}{props.unit}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

const Statistics = (props) => {
  console.log("second:", props.feedback)
  if(props.feedback){
    return (
      <>
      <h1>statistics</h1>
        <Statistic text="good" value={props.good} unit=" "/>
        <Statistic text="neutral" value={props.neutral} unit=" " />
        <Statistic text="bad" value={props.bad} unit=" "/>
        <Statistic text="all" value={props.good+props.neutral+props.bad} unit=" "/>
        <Statistic text="average" value={(props.good - props.bad)/(props.good+props.neutral+props.bad)} unit=" "/>
        <Statistic text="positive" value={((props.good)/(props.good+props.neutral+props.bad))*100} unit="%"/>
      </>
    )
  }
  else{
    return (
      <>
      <h1>statistics</h1>
      no feedback available.
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedback, setFeedback] = useState(0)
  console.log("first:", feedback)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => {
        setGood(good +1); 
        setFeedback(true);
      }} text='good'/>
      <Button onClick={() => {
        setNeutral(neutral +1); 
        setFeedback(true);
      }} text='neutral'/>
      <Button onClick={() => {
        setBad(bad +1); 
        setFeedback(true);
      }} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} feedback={feedback}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)