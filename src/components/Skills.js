import { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      inputValue: '',
      skills: [],
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }

  updateInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  addSkill() {
    this.setState({
      id: this.state.id + 1,
      skills: this.state.skills.concat({
        skillId: this.state.id,
        skillName: this.state.inputValue,
      }),
      inputValue: '',
    });
  }

  deleteHandler(value) {
    this.setState({
      skills: this.state.skills.filter((skill) => skill.skillId !== value),
    });
  }

  render() {
    return (
      <section className="skills">
        <h3>Skills</h3>
        {this.props.mode === 'Edit' ? (
          <div className="input-skills">
            <input
              type="text"
              onChange={this.updateInputValue}
              id="skills"
              value={this.state.inputValue}
            />
            <button onClick={this.addSkill}>Add Skill</button>
          </div>
        ) : null}

        <div className="skills-div">
          {this.state.skills.map((skill, index) => (
            <div className="skill-div" key={index}>
              {skill.skillName}
              {this.props.mode === 'Edit' ? (
                <div
                  className="del-skill"
                  onClick={() => {
                    const currentIndex = skill.skillId;
                    this.deleteHandler(currentIndex);
                  }}
                >
                  -
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Skills;
