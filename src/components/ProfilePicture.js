import { Component } from 'react';
import profileImage from '../img/pp-dummy.png';

class ProfilePicture extends Component {
  render() {
    return (
      <div className="profile-picture">
        <img src={profileImage} alt="profile" width="200px" />
      </div>
    );
  }
}

export default ProfilePicture;
