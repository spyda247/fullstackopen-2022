const Part = (props) => {
  return (
    <p>
      {props.name} {props.excercises}
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
      <Part name={props.part1.name} excercises={props.part1.excercises} />
      <Part name={props.part2.name} excercises={props.part2.excercises} />
      <Part name={props.part3.name} excercises={props.part3.excercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: "Using props to pass data", 
    excercises: 7
  }
  const part3 = {
    name: 'State of a component', 
    excercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        excercise1={part1.excercises}
        excercise2={part2.excercises}
        excercise3={part3.excercises}
      />
    </div>
  )

}

export default App;
