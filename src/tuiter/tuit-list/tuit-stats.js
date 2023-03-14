import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "EDM",
            "userName": "Ultra",
            "handle": "@ultra",
            "time": "2h",
            "title": "Ultra Miami 2023 all set with Top tier DJs - Garrix, Zedd, etc.",
            "image": "../../images/ultra_icon.jpeg",
            "liked": true,
            "replies": 582,
            "retuits": 720,
            "likes": 7942,
            "tuit": "Ultra returns with Ultra Miami 2023! Get your tickets now!!! GA Premium Sold out. VIP Premium 90% sold out."
        }
    }
) => {
    return(
        <>
            <div className="col-3">
                <a href="#" className="wd-action">
                    <i className="bi bi-chat me-2"></i>{tuit.replies}</a>
            </div>

            <div className="col-3">
                <a href="#" className="wd-action"><i className="bi bi-arrow-repeat me-2"></i>{tuit.retuits}</a>
            </div>

            <div className="col-3">
                <a href="#" className="wd-action">
                    {
                        tuit.liked && <i className="bi bi-heart-fill me-2 text-danger"></i>
                    }
                    {
                        !tuit.liked && <i className="bi bi-heart me-2"></i>
                    }
                    {tuit.likes}
                </a>
            </div>

            <div className="col-3">
                <a href="#" className="wd-action"><i className="bi bi-share me-2"></i></a>
            </div>
        </>
    );
};
export default TuitStats;