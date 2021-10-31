import { Component } from 'react';
import '../styles/Main.css';

class Main extends Component {
  render() {
    return (
      <div className="form-section">
        <section className="general-info">
          <h3>Personal Information</h3>
          <input type="text" id="first-name" placeholder="First name" />
          <input type="text" id="last-name" placeholder="Last name" />
          <input type="email" id="email" placeholder="Your email" />
          <input type="text" id="phone" placeholder="Your phone Number" />
        </section>
        <section className="education">
          <h3>Education</h3>
          <input type="text" id="name" placeholder="Your name" />
          <input type="email" id="email" placeholder="Your email" />
          <input type="text" id="phone" placeholder="Phone Number" />
        </section>
        <section className="experience">
          <h3>Experience</h3>
          <input type="text" id="name" placeholder="Your name" />
          <input type="email" id="email" placeholder="Your email" />
          <input type="text" id="phone" placeholder="Phone Number" />
        </section>
      </div>
    );
  }
}

export default Main;
