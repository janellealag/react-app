import React, { Component } from "react";

class Counter extends Component {
  // these are all set locally, not updated when counters
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };
  //

  componentDidUpdate(prevProps, prevState) {
    // lifecycle hooks
    //console.log(prevProps);
    //console.log(prevState);
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  renderTags() {
    if (this.state.tags.length === 0) return "There are no Tags!";

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // handleIncrement = e => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm-m-2"
        >
          Delete
        </button>

        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
