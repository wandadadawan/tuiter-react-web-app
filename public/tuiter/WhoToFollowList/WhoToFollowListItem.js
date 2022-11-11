const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-2 d-flex align-items-center">
          <img src="${who.avatarIcon}" width="40px" class="rounded-circle">
        </div>
        <div class="col-8">
          <span class="fw-bold">${who.username}</span>
          <i class="fas fa-check-circle"></i>
          <div>@${who.handle}</div>
        </div>
        <div class="col-2 d-flex justify-content-end align-items-center">
          <button class="btn btn-primary rounded-pill">
            Follow
          </button>
        </div>
      </div>
    </li>
  `);
};

export default WhoToFollowListItem;