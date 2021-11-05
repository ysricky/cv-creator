import { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'Recent Company',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    this.updateCompany = this.updateCompany.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  updateCompany(event) {
    this.setState({ company: event.target.value });
  }

  updatePosition(event) {
    this.setState({ position: event.target.value });
  }

  updateStartDate(event) {
    this.setState({ startDate: event.target.value });
  }

  updateEndDate(event) {
    this.setState({ endDate: event.target.value });
  }

  updateDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <section className="experience">
        <h3>Experience</h3>
        {this.props.mode === 'Preview' ? (
          <h2>{this.state.company}</h2>
        ) : (
          <input
            type="text"
            defaultValue={this.state.company}
            onChange={this.updateCompany}
            id="company"
            placeholder="Company name"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>Position: {this.state.position}</p>
        ) : (
          <input
            type="text"
            defaultValue={this.state.position}
            onChange={this.updatePosition}
            id="position"
            placeholder="Position"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>Start Date: {this.state.startDate}</p>
        ) : (
          <input
            type="month"
            onChange={this.updateStartDate}
            id="start-date"
            min="1991-01"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>End date: {this.state.endDate}</p>
        ) : (
          <input
            type="month"
            onChange={this.updateEndDate}
            id="end-date"
            min="1991-01"
          />
        )}
        {this.props.mode === 'Preview' ? (
          <p>Job Decsription: {this.state.description}</p>
        ) : (
          <input
            type="text"
            defaultValue={this.state.description}
            onChange={this.updateDescription}
            id="description"
            placeholder="Job description"
          />
        )}
      </section>
    );
  }
}

export default Experience;
