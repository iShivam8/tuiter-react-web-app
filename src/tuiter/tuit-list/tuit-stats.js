import React, {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch, useSelector} from "react-redux";
import {updateTuit} from "../tuits/tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const update = () => {
        const newTuit = {
            ...tuit,
            liked: !tuit.liked,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
        }
        dispatch(updateTuit(newTuit))
    }

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
                <p className="wd-action" onClick={update}>
                    {
                        tuit.liked && <i className="bi bi-heart-fill me-2 text-danger"></i>
                    }
                    {
                        !tuit.liked && <i className="bi bi-heart me-2"></i>
                    }
                    {tuit.likes}
                </p>
            </div>

            <div className="col-3">
                <a href="#" className="wd-action"><i className="bi bi-share me-2"></i></a>
            </div>
        </>
    );
};
export default TuitStats;