import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

// Notes: Lift the state of counters to this app.js so both navbar and counters have access

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 }, // gagamitin ng bawat instance nung component
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    // life hooks
    console.log("App - Constructor"); // constructor called only once when an instance of the class is created.
    // you cannot set state because this method is called only once
    // the method has no access to props unless you pass a parameter to this constructor and the super()
  }

  componentDidMount() {
    // called after the component is rendered
    // perfect to place ajax
    // Example:
    // Ajax Call
    // this.setState..

    console.log("App - Mounted");
  }

  handleDelete = counterId => {
    // we do not update the state directly, instead we use setState()
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    // the counter here is the state that is passed
    const counters = [...this.state.counters]; //... is cloning, this will get the values inside the counters array
    // counters[0].value++; this will directly modify the state
    // must have a different object (Clone)

    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
