import React from 'react';

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onClick={() => {console.log("clicked.")}} />
//      </React.Fragment>
//    );
//
//  }
//}

const App = () => {
  return (
  <div>
    <User />
  </div>
  )
}

const User = () => {
  return <div>Hi!</div>
}

export default App;
