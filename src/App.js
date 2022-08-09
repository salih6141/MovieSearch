import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
        <Person name={'Salih'}/>
    </div>
  );
}

export default App;
