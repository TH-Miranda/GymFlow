import React, { Component } from 'react';

class ScrollToElement extends Component {
  scrollToElement = () => {
    const { to } = this.props;
    const element = document.getElementById(to);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <button onClick={this.scrollToElement}>
        {this.props.children}
      </button>
    );
  }
}

export default ScrollToElement;
