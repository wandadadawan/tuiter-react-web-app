const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-9 col-xxl-10">
          <div class="text-secondary">${post.topic}</div>
          <div>
            <span class="fw-bold">${post.userName}</span>
            <i class="fas fa-circle"></i>
            <span class="text-secondary"> - ${post.time}</span>
          </div>
          <div class="fw-bold">${post.title}</div>
          <div class="text-secondary">${post.tweets == undefined ? '' : post.tweets + ' Tuits'}</div>
        </div>
        <div class="col-3 col-xxl-2">
          <img src="${post.image}" class="float-end rounded-3 wd-image">
        </div>
      </div>
    </li>
  `);
};
export default PostSummaryItem;