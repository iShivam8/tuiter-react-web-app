import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return(
        <div>
            <div className="row mt-2">

                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>

                <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>

            </div>
        </div>
    );
}

export default Tuiter;