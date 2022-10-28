import Content from "./Content"
import Header from "./Header"
import Total from "./Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    courseParts: [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App