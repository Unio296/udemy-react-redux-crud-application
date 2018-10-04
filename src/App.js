import React from 'react';
import PropTypes from 'prop-types';

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

//値を定義しない場合デフォルトで入る値を設定できる
//User.defaultProps = {
//  age: 1
//}

//型のチェックができる
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
