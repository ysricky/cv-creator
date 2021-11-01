import { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <section className="education">
        <h3>Education</h3>
        <input type="text" id="name" placeholder="Your name" />
        <input type="email" id="email" placeholder="Your email" />
        <input type="text" id="phone" placeholder="Phone Number" />
      </section>
    );
  }
}

export default Education;
