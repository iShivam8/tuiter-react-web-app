import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";

import TuitStats from "./tuit-stats";
import {deleteTuit} from "../tuits/tuits-reducer";
const TuitItem = (
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
            "tuit": "Ultra returns with Ultra Miami 2023! Get your tickets now!!! GA Premium Sold out. VIP 90% sold out."
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} width={48} src={`/images/${tuit.image}`}/>
                </div>

                <div className="col-11">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}>
                    </i>

                    <div><span className="fw-bolder ms-2 me-1">{tuit.userName}</span>
                        <i className="bi bi-patch-check-fill me-1  wd-blue-color me-1"></i>
                        <span className="wd-handle me-1">{tuit.handle}</span><i className="bi bi-dot"></i>
                        <span className="wd-handle">{tuit.time}</span>
                    </div>

                    <div className="ms-2">
                        {tuit.tuit}
                    </div>

                    <div className="row wd-post-actions mb-3 mt-2 ms-0">
                        <TuitStats key = {tuit._id} tuit = {tuit}/>
                    </div>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;