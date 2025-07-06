import { Component } from "react";
import Counter from "./Counter";
import Counter1 from "./Counter1";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount : When component render first Time");
  }

  increaseCount = () => {
    this.setState({count : this.state.count + 1})
  };

  componentWillUnmount(){
    console.log("componentWillUnmount : component Removed")
  }


  render() {
    return (
      <div>
        {/* <Counter number = {this.state.count}/> */}
        <Counter1 number = {this.state.count}/>
        {/* <button onClick={this.increaseCount}>Click here</button> */}
      </div>
    );
  }
}

export default ClassComponent;
