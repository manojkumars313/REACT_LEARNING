import { Component } from "react";

class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      month: "Feb",
      food: "Pav Bhaji",
      isAboveEighteen: props.age > 18 ? true : false,
    };
    console.log("constructor is called");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "green" });
    }, 2000);
    console.log("componentDidMount is called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate is called");
    // console.log(
    //   "current value of props and state is called",
    //   this.props,
    //   this.state
    // );
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate is called");
    // console.log("Previous value of props and states", prevProps, prevState);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount is called");
    alert("componentWillUnmount");
  }

  render() {
    console.log("render is called");
    return (
      <div>
        <h1> My favourites</h1>
        <h2>My favourite color: {this.state.color}</h2>
      </div>
    );
  }
}

export default Favourite;

/*
Phases of React lifeCycle
1. Mounting - Component has been attached to the DOM 
  * constructor() - where you initialise initial state values
  * render() - showing HTML on the browser
  * componentDidMount() - when component is mounted, this method is called
2. Updating - Component is growing/updating 
  * shouldComponentUpdate()
  * render()
  * componentDidUpdate()
3. UnMounting -  Component has been detached to the DOM 
  componentWillUnmount()
*/
