import { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Copyright © 2021 ysricky</p>
        <a href="https://github.com/ysricky" target="_blank" rel="noreferrer">
          <IconContext.Provider
            value={{ color: 'red', className: 'github-icon' }}
          >
            <FaGithub size={30} />
          </IconContext.Provider>
        </a>
      </div>
    );
  }
}

export default Footer;
