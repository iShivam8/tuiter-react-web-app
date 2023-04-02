import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";

import TuitStats from "./tuit-stats";
import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
const TuitItem = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
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