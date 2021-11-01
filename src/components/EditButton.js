import { Component } from 'react';

class EditButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <button onClick={this.props.buttonClicked}>{this.props.mode}</button>
    );
  }
}

export default EditButton;
