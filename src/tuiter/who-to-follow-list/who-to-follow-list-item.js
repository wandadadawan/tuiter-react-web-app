const WhoToFollowListItem = (
    {
      who = {username: 'NASA', handle: 'NASA', avatarIcon: 'nasa-logo.png', _id: 123}
    }
) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 d-flex align-items-center">
            <img src={`/images/${who.avatarIcon}`}
                 height={48}
                 className="rounded-circle"
                 alt={who.username}/>
          </div>
          <div className="col-8">
            <span className="fw-bold">{who.username}</span>
            <i className="fas fa-check-circle ms-1"></i>
            <div>@{who.handle}</div>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;