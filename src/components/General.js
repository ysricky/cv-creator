import { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      fullName: 'Your full name',
      email: 'Your email',
      phone: null,
    };
    this.updateFullName = this.updateFullName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateFullName(event) {
    this.setState({ fullName: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <section className="general-info">
        <h3>Personal Information</h3>
        {this.props.mode === 'Preview' ? (
          <p>{this.state.fullName}</p>
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
            type="email"
            defaultValue={this.state.email}
            onChange={this.updateEmail}
            id="email"
            placeholder="Your email"
          />
        )}
        <input type="text" id="phone" placeholder="Your phone Number" />
      </section>
    );
  }
}

export default General;
