import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {  // nilagay na to sa app.js
  //   counters: [
  //     { id: 1, value: 3 }, // gagamitin ng bawat instance nung component
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };

  render() {
    // object destructuring
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} // used internally by react, not able to access in counter component
            onDelete={onDelete} // bubbling this event to its parent
            value={counter.value}
            id={counter.id} // properties
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
