import React, { Component } from 'react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends Component {
  state = {
      hasError: false
  }
  componentDidCatch(error, info) {
      console.log(error, info)
      this.setState({ hasError: true })
  }
  render() {
    if(this.state.hasError) {
      return <div className="error">
                <p>Error has been detected!</p>
                <button onClick={() => console.log("Message of error")}>Inform about error</button>
            </div>
    } else {
      return this.props.children;
    }
  }
}