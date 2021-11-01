import { Component } from 'react';
import '../styles/Main.css';
import EditButton from './EditButton';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'Preview',
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    this.state.mode === 'Preview'
      ? this.setState({ mode: 'Edit' })
      : this.setState({ mode: 'Preview' });
  }

  render() {
    return (
      <div className="main">
        <EditButton buttonClicked={this.changeMode} mode={this.state.mode} />
        <General mode={this.state.mode} />
        <Education mode={this.state.mode} />
        <Experience mode={this.state.mode} />
      </div>
    );
  }
}

export default Main;
