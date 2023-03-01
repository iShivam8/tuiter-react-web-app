import "./index.css";
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list";

const HomeComponent = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-10 col-lg-8 col-xl-7">
                    <PostList/>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-5">
                    <PostSummaryList/>
                </div>
            </div>
        </>
    );
};
export default HomeComponent;