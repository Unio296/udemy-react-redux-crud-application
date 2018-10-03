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

const profiles = [
  {name: "Taro", age: 10},
  {name: "Hanako", age: 5},
  {name: "Unio", age: 28},
  {name: "Noname"}
]

const App = () => {
  return (
  <div>
    {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>Hi!I am {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  age: 1
}

export default App;
