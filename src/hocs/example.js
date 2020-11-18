import React, { Component } from 'react'

export default class ComponentA extends Component {
  state = {
    visible: false
  }
  
  render() {
    return this.props.children.map((Child, index) => <Child key={index} {...this.state} />);
  }
}
