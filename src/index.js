import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <div>Welcome to a basic react starting point</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);