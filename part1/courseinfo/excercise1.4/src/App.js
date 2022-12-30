const Part = ({ part }) => {

  return (
    <p>
      {part.name} {part.excercises}
    </p>
  )
}


const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
console.log(parts)
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <div>
      <p>Number of excercises {parts[0].excercises + parts[1].excercises + parts[2].excercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: "Using props to pass data",
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

}

export default App;
