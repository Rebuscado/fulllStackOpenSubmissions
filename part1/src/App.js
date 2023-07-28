
const Hello = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
};

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  return (
    <div>
      <Hello name='jorge'></Hello>
      <Hello name='ricardo'></Hello>
      <Hello></Hello>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
};

export default App;
