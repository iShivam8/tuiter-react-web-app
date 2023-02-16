const PostItem = (post) => {
    return(`
            <div class="row mt-2 wd-content-data">
                <div class="col-1">
                    <img class="wd-user-avatar mt-2" src="${post.avatarIcon}">
                </div>
                <div class="col-11">
                    <span class="wd-username">${post.userName}</span>
                    <span class="wd-topic-posted-date">@${post.handle}</span>
                    <img class="wd-verified-icon" src="../img/icons/icon-verified-tick.png">
                    <span class="wd-topic-posted-date"> - ${post.time}</span>
                    <br/>
                    <p class="wd-post-title">${post.title}</p>
                    <div class="wd-container">
                        <img class="wd-post-image" src="${post.image}">
                    </div>
                    <div class="wd-content-header pt-1 ps-2 pe-2 pb-2">
                        <span>${post.contentHeader}</span><br/>
                        <p class="wd-post-content">${post.content}
                        <br/>${post.contentSite}</p>
                    </div>
                    <div class = "row wd-post-actions mb-3 mt-2">
                        <div class = "col-3">
                            <a href = "#" class = "wd-action"><i class="fa-regular fa-comment me-2"></i>${post.commentCount}</a>
                        </div>
                        <div class = "col-3">
                            <a href = "#" class = "wd-action"><i class="fa fa-retweet me-2"></i>${post.retuitCount}</a>
                        </div>
                        <div class = "col-3">
                            <a href = "#" class = "wd-action"><i class="fa-regular fa-heart me-2"></i>${post.likeCount}</a>
                        </div>
                        <div class = "col-3">
                            <a href = "#" class = "wd-action"><i class="fa-solid fa-arrow-up-from-bracket me-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
   `);
}
export default PostItem;