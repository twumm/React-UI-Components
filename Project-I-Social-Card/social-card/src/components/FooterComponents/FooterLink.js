import React, { Component } from 'react';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';

class FooterLink extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      clickCount: 0,
    }

    this.state = this.initialState;
  }

  linkClickHandler = () => {
    this.setState({
      clickCount: this.initialState.clickCount++
    })
  }

  render()  {
    const { icon, showcount } = this.props;

    return (
      <div>
        <FontAwesomeIcon icon={icon} showcount={showcount} onClick={this.linkClickHandler} />
        <span>
          {showcount ? null : this.state.clickCount}
        </span>
      </div>
    );
  }
}

export default FooterLink;
