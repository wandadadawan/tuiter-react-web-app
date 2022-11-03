import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
  const profile = useSelector(state => state.profile);

  // Reformat date of birth
  let profileBirthdayMonth = profile.dateOfBirth.split("/")[0];
  let profileBirthdayDate = profile.dateOfBirth.split("/")[1];
  if (profileBirthdayMonth.length === 1) {
    profileBirthdayMonth = "0" + profileBirthdayMonth;
  }
  if (profileBirthdayDate.length === 1) {
    profileBirthdayDate = "0" + profileBirthdayDate;
  }
  let profileBirthdayYear = profile.dateOfBirth.split("/")[2];

  const [nameString, setNameString] = useState(profile.firstName + " " + profile.lastName);
  const [bioString, setBioString] = useState(profile.bio);
  const [locationString, setLocationString] = useState(profile.location);
  const [websiteString, setWebsiteString] = useState(profile.website);
  const [birthdateString, setBirthdateString] = useState(profileBirthdayYear + "-" + profileBirthdayMonth + "-" + profileBirthdayDate);
  const [dateInEdit, setDateInEdit] = useState(false);

  const changeName = (event) => {
    setNameString(event.target.value);
  };

  const changeBio = (event) => {
    setBioString(event.target.value);
  };

  const changeLocation = (event) => {
    setLocationString(event.target.value);
  };

  const changeWebsite = (event) => {
    setWebsiteString(event.target.value);
  };

  const changeBirthdate = (event) => {
    setBirthdateString(event.target.value);
  };

  const dispatch = useDispatch();
  const saveHandler = () => {
    const birthdateStringArray = birthdateString.split("-");
    const newProfile = {
      firstName: nameString.split(" ")[0],
      lastName: nameString.split(" ")[1],
      bio: bioString,
      location: locationString,
      website: websiteString,
      dateOfBirth: birthdateStringArray[1] + "/" + birthdateStringArray[2] + "/" + birthdateStringArray[0]
    }
    dispatch(updateProfile(newProfile));
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
            <Link to="/tuiter/profile"><button className="btn float-end wd-edit-profile-button rounded-pill me-2" onClick={() => saveHandler()}>Save</button></Link>
          </div>
        </div>
        <img src={`../../images/${profile.bannerPicture}`} height={130} alt={profile.bannerPicture} className="w-100 rounded-1 mt-1 wd-post-summary-image"/>
        <div>
          <img src={`../../images/${profile.profilePicture}`} height={80} width={80} alt={profile.profilePicture} className="rounded-circle ms-3 wd-profile-image"/>
        </div>
        <div className="ms-3">
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Name</label>
            <input type="text" className="form-control bg-black text-white pt-0" value={nameString}
                    onChange={changeName}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Bio</label>
            <textarea type="text" className="form-control bg-black text-white pt-0" value={bioString}
                      onChange={changeBio}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Location</label>
            <input type="text" className="form-control bg-black text-white pt-0" value={locationString}
                    onChange={changeLocation}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 fa-sm">Website</label>
            <input type="text" className="form-control bg-black text-white pt-0" value={websiteString}
                  onChange={changeWebsite}/>
          </div>
          <div className="wd-edit-profile-border mb-3">
            <label className="ps-3 me-2 fa-sm">Birth date</label>
            {
              !dateInEdit && (<span className="fa-sm text-primary" onClick={() => setDateInEdit(true)}> · Edit</span>)
            }
            {
              !dateInEdit && <input type="text" className="form-control bg-black text-white pt-0" value={birthdateString} readOnly/>
            }
            {
              dateInEdit && <input type="date" value={birthdateString} onChange={changeBirthdate}/>
            }
          </div>
        </div>
      </div>
  );
};
export default EditProfile;
