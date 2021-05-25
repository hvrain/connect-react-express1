import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
      <button type="button" onClick={() => {
        fetch('/api/data')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
      }}>get data</button>
    </div>
    </div>
  );
}

export default App;
