import { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <section className="experience">
        <h3>Experience</h3>
        <input type="text" id="name" placeholder="Your name" />
        <input type="email" id="email" placeholder="Your email" />
        <input type="text" id="phone" placeholder="Phone Number" />
      </section>
    );
  }
}

export default Experience;
