import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Profile = () => {
  const profile = useSelector(state => state.profile);
  const birthdayArray = profile.dateOfBirth.split("/");
  const joindayArray = profile.dateJoined.split("/");
  const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
      <div>
        <div className="d-flex flex-wrap align-items-center">
          <div className="col-1">
            <Link to="/tuiter/home"><i className="bi bi-arrow-left text-white-50"></i></Link>
          </div>
          <div className="col-auto">
            <h5 className="mb-0">{profile.firstName} {profile.lastName}</h5>
            <div className="text-secondary">{profile.numberOfTuits} Tuits</div>
          </div>
        </div>
        <img src={`../../images/${profile.bannerPicture}`} height={130} alt={profile.bannerPicture} className="w-100 rounded-1 mt-1 wd-post-summary-image"/>
        <div>
          <img src={`../../images/${profile.profilePicture}`} height={80} width={80} alt={profile.profilePicture} className="rounded-circle ms-3 wd-profile-image"/>
          <Link to="/tuiter/edit-profile"><button className="btn float-end wd-edit-profile-button rounded-pill mt-2 me-2">Edit Profile</button></Link>
        </div>
        <div className="ms-3">
          <h5 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h5>
          <div className="text-secondary">{profile.handle}</div>
          <div className="mt-3">
            <p>{profile.bio}</p>
            <div>
              <span className="me-3"><i className="bi bi-geo-alt me-1"></i>{profile.location}</span>
              <span className="me-3"><i className="bi bi-balloon me-1"></i>Born {months[parseInt(birthdayArray[0])] + " " + parseInt(birthdayArray[1]) + ", " + birthdayArray[2]}</span>
              <span className="me-3"><i className="bi bi-calendar3 me-1"></i>Joined {months[joindayArray[0]] + " " + joindayArray[1]}</span>
            </div>
          </div>
          <div className="mt-3">
            <span className="me-3"><span className="fw-bold text-white">{profile.followingCount}</span> Following</span>
            <span className="fw-bold text-white">{profile.followersCount}</span> Followers
          </div>
        </div>
      </div>
  );
};
export default Profile;