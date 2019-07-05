const multiline = require("multiline");
const SAMPLE_TEMPLATE = multiline(() => {
  /*
import React from 'react';
import PropTypes from 'prop-types';
export default class ${component} extends React.Component {
    static defaultProps = {
      place: 'holder'
    }
    static propTypes = {
      place: React.PropTypes.string.isRequired
    }
    state = {
      foo: 'bar'
    }
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          { this.state.foo }
        </div>
      )
    }
}
*/
});

module.exports = {
  TEMPLATE: SAMPLE_TEMPLATE
};
