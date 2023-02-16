import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="form-group has-search mt-2 mb-2">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="wd-form-control border-0 wd-background-color form-control-lg" 
                    placeholder="Search Tuiter">
                    <span>
                        <a href="explore-settings.html">
                            <img class=" fa fa-gear fa-2x wd-settings-logo" 
                            src="../img/icons/gear-settings.png" alt="Gear Icon">
                        </a>
                    </span>
                </div>
            </div>

            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item d-lg-block d-md-none d-sm-none d-none">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-xl-block d-lg-none d-md-none d-sm-none d-none">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            
             <!-- image with overlaid text -->
             
            <div class="wd-container">
                <img class="wd-header-image" src="../../images/Garrix%20Banner%20Image.jpeg" alt="Garrix Banner Image">
                <p class="bottom-left">
                    <span class="wd-image-span-tag wd-banner-text">Garrix at NYC</span>
                </p>
            </div>
                
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
