import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  // by default ye rendring ko update nhi hone deta agar aap update chate hai rendring me bhi to apko isme 'return true' krna hoga fir ye use rendring krne dega mtbl screen pr jo bhi out aayega ab usme increment hoga
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.counter);
    // ham yha jesi bhi if condition denge ,vha tak hi rendring karega it means ye screen pr show karega jese mene yha less then 5 diya hai to ye 5 tak run karega and then rendring off kr dega meatlb screen pr show krna bnd kr dega but background me ye chalta rahega console me dekh sakte hai
    if (this.state.counter < 5) {
      return true;
    }
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.counter}</h2>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
