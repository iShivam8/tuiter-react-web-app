import posts from "./post-list.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
            <div class="mt-1">
                <ul class="list-group ms-3 me-3">
                    ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }
                </ul>
            </div>
   `);
}
export default PostList;