const PostSummaryItem = ({
    post = {
      topic: "Space",
      username: "SpaceX",
      time: "2h",
      title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      image: "tesla-logo.png",
      _id: 123,
    }
}) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-9">
            <div className="text-secondary">{post.topic}</div>
            <div><span className="fw-bold">{post.username}</span><i className="fas fa-check-circle ms-1"></i><span className="text-secondary"> · {post.time}</span></div>
            <div className="fw-bold">{post.title}</div>
          </div>
          <div className="col-3">
            <img width={70} height={70} className="float-end rounded-3 wd-post-summary-image" src={`/images/${post.image}`} alt={post.image}/>
          </div>
        </div>
      </li>

  );
};
export default PostSummaryItem;