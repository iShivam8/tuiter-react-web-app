import React, {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch, useSelector} from "react-redux";
import {updateTuit} from "../tuits/tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

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
            <div className="col-2">
                <a href="#" className="wd-action">
                    <i className="bi bi-chat me-2"></i>{tuit.replies}</a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action"><i className="bi bi-arrow-repeat me-2"></i>{tuit.retuits}
                </a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action">
                    { tuit.liked && <i className="bi bi-heart-fill me-2 text-danger"
                                       onClick={() => dispatch(updateTuitThunk({
                                           ...tuit,
                                           liked: false,
                                           likes: tuit.likes - 1}))}/> }
                    { !tuit.liked && <i className="bi bi-heart me-2"
                                        onClick={() => dispatch(updateTuitThunk({
                                            ...tuit,
                                            liked: true,
                                            likes: tuit.likes + 1}))}/> }
                    {tuit.likes}
                </a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action">
                    { tuit.disliked && <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"
                                          onClick={() => dispatch(updateTuitThunk({
                                              ...tuit,
                                              disliked: false,
                                              dislikes: tuit.dislikes - 1}))}/> }
                    { !tuit.disliked && <i className="bi bi-hand-thumbs-down me-2"
                                           onClick={() => dispatch(updateTuitThunk({
                                               ...tuit,
                                               disliked: true,
                                               dislikes: tuit.dislikes + 1}))}/> }
                    {tuit.dislikes}
                </a>
            </div>
            <div className="col-2">
                <a href="#" className="wd-action"><i className="bi bi-share me-2"></i></a>
            </div>
        </>
    );
};
export default TuitStats;