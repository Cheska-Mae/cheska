import ProfilePicture from './ProfilePicture'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Button from './Button'

function Profile() {
  return (
    <div className="profile-container">
      <div className="info-card">
        <div className="info-top">
          <AboutMe />
          <Skills />
        </div>
        <Button />
      </div>
      
      <ProfilePicture />
    </div>
  )
}

export default Profile
