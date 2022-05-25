import React from "react";

class Split extends React.Component {
  target = React.createRef();

  split = () => {
    if (this.target.current) {
      Splitting({ target: this.target.current });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    return <div ref={this.target}>{this.props.children}</div>;
  }
}

export default Split;
/**
 * @param {{ target: any; }} _arg0
 */
function Splitting(_arg0) {
  throw new Error("Function not implemented.");
}

