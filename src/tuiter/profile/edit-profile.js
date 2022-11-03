import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  const birthdayArray = profile.dateOfBirth.split("/");
  const joindayArray = profile.dateJoined.split("/");
  const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dispatch = useDispatch();
  const saveHandler = () => {
    dispatch();

  };

  return (
      <div>
        <div className="d-flex align-items-center mb-2">
          <div className="col-1">
            <Link to={"/tuiter/profile"}><i className="bi bi-x-lg col-1 pt-1 text-white"></i></Link>
          </div>
          <div className="col-2">
            <span className="fw-bold text-white">Edit Profile</span>
          </div>
          <div className="col-9">
            <button className="btn float-end wd-edit-profile-button rounded-pill me-2" onClick={() => saveHandler()}>Save</button>
          </div>
        </div>
        <img src={`../../images/${profile.bannerPicture}`} height={130} alt={profile.bannerPicture} className="w-100 rounded-1 mt-1 wd-post-summary-image"/>
        <div>
          <img src={`../../images/${profile.profilePicture}`} height={80} width={80} alt={profile.profilePicture} className="rounded-circle ms-3 wd-profile-image"/>
        </div>
        <div className="ms-3">
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Name</label>
            <input type="text" className="form-control bg-black text-white pt-0" value={profile.firstName + " " + profile.lastName}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Bio</label>
            <textarea type="text" className="form-control bg-black text-white pt-0" value={profile.bio}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Location</label>
            <input type="text" className="form-control bg-black text-white pt-0" value={profile.location}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Website</label>
            <input type="text" className="form-control bg-black text-white pt-0" value={profile.website}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Birth date</label>
            <input type="text" className="form-control bg-black text-white pt-0" value={profile.dateOfBirth}/>
          </div>
        </div>
      </div>
  );
};
export default EditProfile;
