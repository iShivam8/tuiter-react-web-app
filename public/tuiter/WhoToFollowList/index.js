import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return(`
                    <ul class="list-group">
                    <div class="list-group-item">Who To Follow</div>
                     ${
                        who.map(who => {
                            return(WhoToFollowListItem(who));
                        }).join('')
                     }
                    </ul>
                
    `);
}
export default WhoToFollowList;