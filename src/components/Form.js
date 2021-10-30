import { Component } from 'react';
import '../styles/Form.css';

class Form extends Component {
  render() {
    return (
      <div className="form-section">
        <section className="general-info">
          <form></form>
        </section>
        <section className="education">
          <form></form>
        </section>
        <section className="experience">
          <form></form>
        </section>
      </div>
    );
  }
}

export default Form;
