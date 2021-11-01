import { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { firstName: '', lastName: null, email: null, phone: null };
    this.updateFirstName = this.updateFirstName.bind(this);
  }

  updateFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  render() {
    return (
      <section className="general-info">
        <h3>Personal Information</h3>
        <input
          type="text"
          defaultValue={this.state.firstName}
          onChange={this.updateFirstName}
          id="first-name"
          placeholder="First name"
        />
        <input type="text" id="last-name" placeholder="Last name" />
        <input type="email" id="email" placeholder="Your email" />
        <input type="text" id="phone" placeholder="Your phone Number" />
      </section>
    );
  }
}

export default General;
