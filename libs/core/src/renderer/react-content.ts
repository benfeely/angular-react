import * as React from 'react';
import ReactDOM = require('react-dom');


export const CHILDREN_TO_APPEND_PROP = 'children-to-append';

export class ReactContent extends React.Component {

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this);
    if (this.props[CHILDREN_TO_APPEND_PROP]) {
      if (true) { console.warn('ReactContent Component > componentDidMount > childrenToAppend:', this.props[CHILDREN_TO_APPEND_PROP]); }
      this.props[CHILDREN_TO_APPEND_PROP].map(child => element.appendChild(child));
    }
  }

  render() {
    return React.createElement('react-content');
  }
}
