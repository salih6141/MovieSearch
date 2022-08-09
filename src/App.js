import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
        <Person 
          name='Salih' 
          lastName='komut' age='23'/>
        <Person name='John' lastName='Doe' age='25'/>
    </div>
  );
}

export default App;
