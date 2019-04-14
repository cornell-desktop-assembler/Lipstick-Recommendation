import React, { Component } from 'react';
import IndexContainer from './components/IndexContainer.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
          />
        </header>
        <body>
          <div className="lip-background">
              <div className="lip-container">
                  {/*<img src="./title.png" alt="Forest" width="170" height="100"/>*/}
                  <img src={require('./title.png')} />
                  <IndexContainer/>
              </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
