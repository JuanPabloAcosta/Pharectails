import React from "react"
import PropTypes from "prop-types"
class QuiuboLaRata extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

QuiuboLaRata.propTypes = {
  greeting: PropTypes.string
};
export default QuiuboLaRata
