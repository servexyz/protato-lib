import React from "react";
import PropTypes from "prop-types";
export default class Foobar extends React.Component {
  static defaultProps = {
    place: "holder"
  };
  static propTypes = {
    place: React.PropTypes.string.isRequired
  };
  state = {
    foo: "bar"
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.state.foo}</div>;
  }
}
