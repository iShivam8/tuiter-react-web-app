import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";

const UserProfile = (
    {
        profile = {
            "_id": "12345678",
            "firstName": "Martin",
            "lastName": "Garrix",
            "handle": "@Martijn",
            "profilePicture": "../../images/Garrix-dp.jpeg",
            "bannerPicture": "../../images/sentio.webp",
            "bio": "#1 DJ in the world! Sentio Album out now!",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "5/14/1996",
            "dateJoined": "3/2011",
            "followingCount": 274,
            "followersCount": 87238,
            "tuits": "9,428"
        }
    }
) => {
    return(
        <>
            <div className="row mt-1">
                <div className="col-1">
                    <i className="fa-solid fa-arrow-left-long mt-3 ms-2"></i>
                </div>
                <div className="col-11">
                    <p className="fw-bolder">{profile.firstName} {profile.lastName}
                        <p className="fw-normal wd-user-tweet-count">{profile.tuits} Tweets</p>
                    </p>
                </div>
                <div className="wd-parent mb-2">
                    <img src={`/images/${profile.bannerPicture}`} className="w-100 wd-banner-picture wd-image1"/>
                    <img className="rounded-circle mt-5 wd-image2 ms-2" height={48} width={48} src={`/images/${profile.profilePicture}`}/>
                </div>
                <div>
                    <Link to="/tuiter/edit-profile" className="float-end btn btn-outline-dark rounded-pill fw-bold">Edit profile</Link>
                </div>
                <div className="mt-5">
                    <p className="fw-bolder mb-0">{profile.firstName} {profile.lastName}
                        <p className="fw-normal wd-user-tweet-count mt-0">{profile.handle}</p>
                    </p>
                </div>
                <div>
                    {profile.bio}
                </div>

                <div className="row mt-3 wd-gray-text">
                    <div className="col-3">
                        <i className="bi bi-geo-alt" /> {profile.location}
                    </div>
                    <div className="col-4">
                        <i className="bi bi-balloon" /> Born {profile.dateOfBirth}
                    </div>
                    <div className="col-3">
                        <i className="bi bi-calendar3"/> Joined {profile.dateJoined}
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <p className="fw-bold">{profile.followingCount}<span className="fw-light wd-gray-text"> Following</span></p>
                    </div>
                    <div className="col-3">
                        <p className="fw-bold">{profile.followersCount}<span className="fw-light wd-gray-text"> Followers</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserProfile;