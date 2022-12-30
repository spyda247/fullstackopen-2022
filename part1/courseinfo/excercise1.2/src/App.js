const Part = (props) => {
  return (
    <p>
      {props.part} {props.excercise}
    </p>
  )
}


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
      <Part part={props.part1} excercise={props.excercise1} />
      <Part part={props.part2} excercise={props.excercise2} />
      <Part part={props.part3} excercise={props.excercise3} />   
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
