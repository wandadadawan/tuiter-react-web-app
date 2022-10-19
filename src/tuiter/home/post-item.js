import {Link} from "react-router-dom";

const PostItem = ({
    post = {
      _id: 123,
      userName: "Elon Musk",
      handle: "elonmusk",
      content: "Amazing show about <a href=\"https://twitter.com/inspiration4x\">@Inspiration4x</a> mission!",
      time: "23h",
      avatarIcon: "musk-avatar.jpg",
      cardImage: "musk-card-image.jpg",
      cardTitle: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
      cardText: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
      cardSource: "netflix.com",
      comment: "4.2K",
      retweet: "3.5K",
      like: "37.5K"
    }
}) => {
  return (
      <li className="list-group-item wd-post">
        <div className="row mb-2">
          <div className="col-1">
            <img src={`/images/${post.avatarIcon}`} width={45} height={45} className="rounded-circle" alt={post.avatarIcon}/>
          </div>
          <div className="col-11">
            <span className="fw-bold text-white">{post.userName}</span>
            <i className="bi bi-patch-check-fill ms-1 me-1"></i>
            <span className="text-secondary">@{post.handle} · {post.time}<span className="float-end"><i className="fa-solid fa-ellipsis"></i></span></span>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <div className="mt-2">
              <img src={`/images/${post.cardImage}`} className={`w-100 ${post.cardTitle === undefined ? 'wd-post-image-rounded' : 'wd-post-image'}`} alt={post.cardImage}/>
                <div className={`wd-post-content ${post.cardTitle === undefined ? 'd-none' : ''}`}>
                  <div>{post.cardTitle !== undefined ? post.cardTitle : ''}</div>
                  <div className="text-secondary">{`${post.cardText !== undefined ? post.cardText : ''}`}</div>
                  <div className="text-secondary" dangerouslySetInnerHTML={{__html: `${post.cardSource !== undefined ? '<i class="bi bi-link-45deg"></i>' + post.cardSource : ''}`}}></div>
                </div>
            </div>
            <div className="mt-3 row wd-post-icon-group">
              <Link to="#" className="col-3"><i className="bi bi-chat me-3"></i>{post.comment}</Link>
              <Link to="#" className="col-3"><i className="fas fa-retweet me-3"></i>{post.retweet}</Link>
              <Link to="#" className="col-3"><i className="bi bi-heart me-3"></i>{post.like}</Link>
              <Link to="#" className="col-3"><i className="bi bi-upload me-3"></i></Link>
          </div>
          </div>
        </div>
      </li>
  );
};
export default PostItem;