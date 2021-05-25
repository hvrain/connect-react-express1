import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    greet: ""
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={() => {
          fetch('/api/data')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.setState({greet:data.greeting});
          });
        }}>get data</button>
        <div>{this.state.greet}</div>
      </div>
    );
  }
}

export default App;
