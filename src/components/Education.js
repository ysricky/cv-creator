import { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      university: 'University Name',
      major: 'Major',
      graduated: 'Graduated',
    };
    this.updateUniversity = this.updateUniversity.bind(this);
    this.updateMajor = this.updateMajor.bind(this);
    this.updateGraduated = this.updateGraduated.bind(this);
  }

  updateUniversity(event) {
    this.setState({ university: event.target.value });
  }

  updateMajor(event) {
    this.setState({ major: event.target.value });
  }

  updateGraduated(event) {
    this.setState({ graduated: event.target.value });
  }

  render() {
    return (
      <section className="education">
        <h3>Education</h3>
        {this.props.mode === 'Preview' ? (
          <h2>{this.state.university}</h2>
        ) : (
          <input
            type="text"
            defaultValue={this.state.university}
            onChange={this.updateUniversity}
            id="university"
            placeholder="University name"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>{this.state.major}</p>
        ) : (
          <input
            type="text"
            defaultValue={this.state.major}
            onChange={this.updateMajor}
            id="major"
            placeholder="Your major"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>Graduated in {this.state.graduated}</p>
        ) : (
          <input
            type="month"
            onChange={this.updateGraduated}
            id="graduate"
            min="1991-01"
          />
        )}
      </section>
    );
  }
}

export default Education;
