import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";

const ExploreComponent = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-10 col-lg-8 col-xl-7">
                    <div className="row">
                        <div className="col-11 position-relative">
                            <input placeholder="Search Tuiter"
                                   className="form-control rounded-pill ps-5"/>
                            <i className="bi bi-search position-absolute
                               wd-nudge-up"></i>
                        </div>
                        <div className="col-1">
                            <i className="wd-bottom-4 text-primary float-end bi
                               bi-gear-fill fs-2 position-relative"></i>
                        </div>
                    </div>
                    <ul className="nav nav-pills mb-2">
                        <li className="nav-item">
                            <a className="nav-link active">For You</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">News</a>
                        </li>
                    </ul>
                    <div className="position-relative mb-2">
                        <img src="/images/Garrix%20Banner%20Image.jpeg" className="w-100"/>
                        <h1 className="position-absolute wd-nudge-up text-white">
                            Garrix at Brooklyn Mirage</h1>
                    </div>
                    <PostSummaryList/>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-5">
                    <WhoToFollowList/>
                </div>
            </div>

        </>
    );
};
export default ExploreComponent;