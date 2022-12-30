const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  
  return (
    <div>
      <p>{props.part1} {props.excercise1}</p>
      <p>{props.part2} {props.excercise2}</p> 
      <p>{props.part3} {props.excercise3}</p>  
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.excercise1 + props.excercise2 + props.excercise3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercise1 = 10
  const part2 = "Using props to pass data"
  const excercise2 = 7
  const part3 = 'State of a component'
  const excercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1} 
        excercise1={excercise1}
        part2={part2}
        excercise2={excercise2}
        const part3={part3}
        excercise3={excercise3}
        /> 
        
      <Total 
        excercise1={excercise1}
        excercise2={excercise2}
        excercise3={excercise3}
        />
    </div>
  )

}

export default App;
