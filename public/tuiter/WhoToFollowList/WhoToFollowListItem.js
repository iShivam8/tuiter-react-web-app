const WhoToFollowListItem = (who) => {
    return(`
            <div class="list-group-item">
                <div class="row">
                    <div class="col-2">
                        <img class="wd-who-to-follow" src="${who.avatarIcon}" alt="Avatar Icon">
                    </div>
                    <div class="col-6 text-white">
                        <span class="wd-who-to-follow-name">${who.userName}</span>
                        <img class="wd-verified-icon" src="../img/icons/icon-verified-tick.png" alt="Verified Icon">
                        <br />
                        <p class="wd-who-to-follow-handle">@${who.handle}</p>
                    </div>
                    <div class="col-4 text-white">
                        <button class="btn btn-primary rounded-pill me-2 me-2">Follow</button>
                    </div>
                </div>
            </div>
   `);
}
export default WhoToFollowListItem;