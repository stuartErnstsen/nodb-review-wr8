//Class Components are components capable of holding state and using lifecycle methods
//To build one, follow these steps:
//1. import React, {Component} from 'react
//2. Create a class that extends Component
//3. Return a JSX display using render
//4. Export the component

//To view how to build a functional component, visit ./Components/Header.js

import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    //componentDidMount is a lifecycle method. It will fire after the first invocation of render
    //in the component. This is a great method for retrieving data from a server that you need 
    //in your component right away.
  }

  render(){
    //render is the only required lifecycle method in class components, as it is required to return
    //a JSX display from a component. All JSX in a component MUST be wrapped by a parent element.
    return (
      <div className="App">
  
      </div>
    )
  }
}

export default App;
