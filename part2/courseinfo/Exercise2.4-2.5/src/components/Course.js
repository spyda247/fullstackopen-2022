
const Stastistics = ({ parts }) => {
    const total = parts.reduce((sum, part) => {
        return sum += part.exercises
    }, 0)


    return (
        <div>
            <b>total of {total} exercises</b>
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

const Content = ({ parts }) => {
    console.log(parts)
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
        </div>

    )
}

const Header = ({ name }) => {
    return <h2>{name}</h2>
}


const Course = ({ courses }) => {
    return (
        <div>
        {courses.map((course) => (
            <div key={course.id}>
                <Header name={course.name} />
                <Content parts={course.parts} />
                <Stastistics parts={course.parts} />
            </div>
        ))}
        </div>
    )
}

export default Course