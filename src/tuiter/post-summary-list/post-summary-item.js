import React from "react";
const PostSummaryItem = (
    {
        post = {
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
            "tuits": "Ultra returns with Ultra Miami 2023! Get your tickets now!!! GA Premium Sold out. VIP 90% sold out."
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;