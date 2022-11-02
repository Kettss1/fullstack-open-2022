import Course from "./components/Course";

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      courseParts: [
        {
          title: 'Fundamentals of React',
          id: 1,
          exercises: 10
        },
        {
          title: 'Using props to pass data',
          id: 2,
          exercises: 7
        },
        {
          title: 'State of a component',
          id: 3,
          exercises: 14
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      courseParts: [
        {
          title: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          title: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      {course.map((course) => (
        <Course course={course} key={course.id}/>
      ))}
    </div>
  )
}

export default App