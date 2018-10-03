import React, { Component } from 'react';

class App extends Component {
  render() {
//    const greeting = "Hi, Unio!"
//    const dom = <h1 className="foo">{greeting}</h1>
//    return <input type="text" onClick={() => {console.log("clicked.")}} />;
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("clicked.")}} />
      </React.Fragment>
    );

  }
}

export default App;
