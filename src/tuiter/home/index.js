import "./index.css";
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list";
import TuitList from "../tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <div className="row mt-2">
                <WhatsHappening/>
                <TuitList/>
            </div>
        </>
    );
};
export default HomeComponent;