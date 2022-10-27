import Content from "./Content"
import Header from "./Header"
import Total from "./Total";

const App = () => {
  const course = 'Half Stack application development';
  const courseParts = [
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
  ];

  return (
    <div>
      <Header courseTitle={course} />
      <Content courseParts={courseParts}/>
      <Total courseParts={courseParts} />
    </div>
  )
}

export default App