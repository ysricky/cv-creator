import { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      fullName: 'Your full name',
      email: 'Your email',
      phone: 'Your phone',
    };
    this.updateFullName = this.updateFullName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
  }

  updateFullName(event) {
    this.setState({ fullName: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updatePhone(event) {
    this.setState({ phone: event.target.value });
  }

  render() {
    return (
      <section className="general-info">
        <h3>Personal Information</h3>
        {this.props.mode === 'Preview' ? (
          <h2>{this.state.fullName}</h2>
        ) : (
          <input
            type="text"
            defaultValue={this.state.fullName}
            onChange={this.updateFullName}
            id="full-name"
            placeholder="Your full name"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>{this.state.email}</p>
        ) : (
          <input
            type="text"
            defaultValue={this.state.email}
            onChange={this.updateEmail}
            id="email"
            placeholder="Your email"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>{this.state.phone}</p>
        ) : (
          <input
            type="text"
            defaultValue={this.state.phone}
            onChange={this.updatePhone}
            id="phone"
            placeholder="Your phone number"
          />
        )}
      </section>
    );
  }
}

export default General;
