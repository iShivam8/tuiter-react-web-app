import React, {useState} from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../user-profile/profile-reducer";
const UserEditProfile = () => {
    let navigate = useNavigate();
    const routeToProfile = () => {
        let path = `../profile`;
        navigate(path);
    };
    const initialProfile = useSelector(state => state.profile);
    let [profile, setProfile] = useState(initialProfile);
    const dispatch = useDispatch();
    const updateProfileHandler = () => {
        dispatch(updateProfile({
            ...profile,
            firstName: profile.firstName,
            lastName:profile.lastName,
            bio: profile.bio,
            location: profile.location,
            website: profile.website,
            dateOfBirth: profile.dateOfBirth}));
    };
    return(
        <>
            <div className="row mt-2">
                <div className="col-1 mt-2">
                    <i className="bi bi-x-lg" onClick={() => routeToProfile()}/>
                </div>
                <div className="col-4 mt-2 fw-bold">
                    Edit Profile
                </div>
                <div className="col-7">
                    <Link to="/tuiter/profile" className="btn btn-dark rounded-pill float-end mb-2"
                          onClick={updateProfileHandler}
                    > Save </Link>
                </div>
                <div className="wd-parent mb-5">
                    <img src={`/images/${profile.bannerPicture}`} className="w-100 wd-banner-picture wd-image1"/>
                    <img className="rounded-circle mt-5 wd-image2 ms-2" src={`/images/${profile.profilePicture}`}/>
                </div>

                <div className="border mt-4 ms-2 rounded-2">
                    <span>First Name</span> <br/>
                    <input value={profile.firstName}
                           className="form-control border-0"
                           onChange={(event) => setProfile({...profile, firstName: event.target.value})}/>
                </div>

                <div className="border mt-2 ms-2 rounded-2">
                    <span>Last Name</span> <br/>
                    <input value={profile.lastName}
                           className="form-control border-0"
                           onChange={(event) => setProfile({...profile, lastName: event.target.value})}/>
                </div>

                <div className="border mt-2 ms-2 rounded-2">
                    <span>Bio</span> <br/>
                    <textarea className="className=form-control border-0 col-12"
                              rows="3"
                              onChange={(e) => setProfile({...profile, bio: e.target.value})}
                              value={profile.bio}/>
                </div>

                <div className="border mt-2 ms-2 rounded-2">
                    <span>Location</span> <br/>
                    <input value={profile.location}
                           className="form-control border-0"
                           onChange={(event) => setProfile({...profile, location: event.target.value})}/>
                </div>

                <div className="border mt-2 ms-2 rounded-2">
                    <span>Website</span> <br/>
                    <input value={profile.website}
                           className="form-control border-0"
                           onChange={(event) => setProfile({...profile, website: event.target.value})}/>
                </div>

                <div className="border mt-2 ms-2 rounded-2">
                    <span>Birth Date</span> <br/>
                    <input type="date" value={profile.dateOfBirth}
                           className="form-control border-0"
                           onChange={(event) => setProfile({...profile, dateOfBirth: event.target.value})}/>
                </div>
            </div>
        </>
    );
};
export default UserEditProfile;