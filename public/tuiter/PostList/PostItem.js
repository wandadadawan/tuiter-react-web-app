const PostItem = (post) => {
  return (`
    <li class="list-group-item wd-post">
      <div class="row mb-2">
        <div class="col-1">
          <img src="${post.avatarIcon}" width="45px" height="45px" class="rounded-circle">
        </div>
        <div class="col-11">
          <span class="fw-bold text-white">${post.username}</span>
          <i class="fas fa-check-circle"></i>
          <span class="text-secondary">@${post.handle} &#8226 ${post.time}<span class="float-end"><i class="fa-solid fa-ellipsis"></i></span></span>
          <div>${post.content}</div>
          <div class="mt-2">
            <img src=${post.cardImage} class="w-100 ${post.cardTitle === undefined ? 'wd-post-image-rounded' : 'wd-post-image'}"> 
            <div class="wd-post-content ${post.cardTitle === undefined ? 'd-none' : ''}">
               <div>${post.cardTitle !== undefined ? post.cardTitle : ''}</div>
               <div class="text-secondary">${post.cardText !== undefined ? post.cardText : ''}</div>
               <div class="text-secondary">${post.cardSource !== undefined ? '<i class="fa-solid fa-link"></i> ' + post.cardSource : ''}</div>
            </div>
          </div>
          <div class="mt-3 row wd-post-icon-group">
            <a href="#" class="col-3"><i class="fa-regular fa-comment me-3"></i></span>${post.comment}</a>
            <a href="#" class="col-3"><i class="fa-solid fa-repeat me-3"></i></span>${post.retweet}</a>
            <a href="#" class="col-3"><i class="fa-regular fa-heart me-3"></i></span>${post.like}</a>
            <a href="#" class="col-3"><i class="fa-solid fa-arrow-up-from-bracket me-3"></i></span></a>
          </div>
        </div>
      </div>
    </li>
  `);
};
export default PostItem;