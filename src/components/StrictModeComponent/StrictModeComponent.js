import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./StrictModeComponent.css";

class StrictModeComponent extends Component {
  state = {
    mounted: true,
    updated: false,
  };

  UNSAFE_componentWillMount() {
    this.setState({ mounted: false });
    console.log("Inside UNSAFE_componentWillMount");
  }

  componentDidMount() {
    this.setState({ mounted: true });
    console.log("Inside componentDidMount");
  }

  UNSAFE_componentWillUpdate() {
    if (!this.state.updated) {
      this.setState({ updated: true });
      console.log("Inside UNSAFE_componentWillUpdate");
    }
  }

  render() {
    console.log("Render: ", this.state);
    return (
      <Fragment>
        <div className="strict-wrapper">
          <h1>Strict Mode Component</h1>
          {this.state.mounted && <h2>Mounted</h2>}
          {this.state.updated && <h2>Updated</h2>}
        </div>
        <ol>
          <li>
            <h2>Unsafe methods:</h2>
            <ul>
              <li>componentWillMount</li>
              <li>componentWillUpdate</li>
              <li>componentWillReceiveProps</li>
            </ul>
          </li>
          <li>
            <h2>
              Warning about legacy string ref API usage - alternative use new
              ref API
            </h2>
          </li>
          <li>
            <h2>
              Warning about deprecated findDOMNode usage - alternative use ref
            </h2>
          </li>
          <li>
            <h2>Detecting unexpected side effects</h2>
            <p>Conceptually, React does work in two phases:</p>
            <ul>
              <li>
                The render phase determines what changes need to be made to e.g.
                the DOM. During this phase, React calls render and then compares
                the result to the previous render.
              </li>
              <li>
                The commit phase is when React applies any changes. (In the case
                of React DOM, this is when React inserts, updates, and removes
                DOM nodes.) React also calls lifecycles like componentDidMount
                and componentDidUpdate during this phase.
              </li>
            </ul>
          </li>
          <li>
            <h3>
              Render phase lifecycles include the following class component
              methods:
            </h3>
            <ul>
              <li>constructor</li>
              <li>componentWillMount (or UNSAFE_componentWillMount)</li>
              <li>
                componentWillReceiveProps (or UNSAFE_componentWillReceiveProps)
              </li>
              <li>componentWillUpdate (or UNSAFE_componentWillUpdate)</li>
              <li>getDerivedStateFromProps</li>
              <li>shouldComponentUpdate</li>
              <li>render</li>
              <li>setState updater functions (the first argument)</li>
            </ul>
          </li>
        </ol>
      </Fragment>
    );
  }
}

StrictModeComponent.propTypes = {
  name: PropTypes.string,
};

export default StrictModeComponent;
