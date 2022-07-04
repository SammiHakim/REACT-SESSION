import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor() {
    //This is optional , this method is called first whenever a component is rendered on the DOM.In this method we need to define the state of the object if any.The super method must be called first to get the propeties and methods access
    console.log("Constructor");
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    //This method gets called after the component is mounted on the DOM.
    console.log("Component Mounted");
  }

  componentDidUpdate(prevstate, pervrops) {
    //not called on initial render , called after component is updated
    console.log("Did update", prevstate, pervrops);
  }

  shouldComponentUpdate() {
    //not called on initial render , called after component is updated and conditionally we can update the component
    // console.log("Should Update", state, props);
    // return this.state.count > 0 || this.state.count === 1 ? true : false;
    return true;
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    //This method is called to render the content of the component.Must be defined whenever creating a class based component
    console.log("Render");
    return (
      <div
        style={{
          marginLeft: "40%",
        }}
      >
        <div>ClassCounter</div>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrease
        </button>
      </div>
    );
  }
}

class MyComponent extends React.Component {
  constructor() {
    //first load
    console.log("Component Constructor ");
    super();
    this.state = {
      count: 0,
      city: "Pune",
    };
  }

  componentDidMount() {
    //first load
    // fetch(
    //   "http://localhost:3000/api/v2/appointment/sessions/public/findByPin?pincode=110001&date=31-03-2021"
    // )
    //   .then((resp) => JSON.parse(resp))
    //   .then((data) => console.log(data));
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Componet Unmount");
  }

  render() {
    //always
    console.log("Render");
    return (
      <div>
        <h3>Hello World - {this.state.count}</h3>
        <h3>{this.state.city}</h3>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1, city: "Mumbai" })
          }
        >
          Increase
        </button>
        <button onClick={() => this.setState({ count: 0, city: "Pune" })}>
          Reset
        </button>
      </div>
    );
  }
}

export { MyComponent };

// LifeCycle methods
//constructor -- state {} // automatically
// render -- content display // define
