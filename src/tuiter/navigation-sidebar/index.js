import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split("/");
  let active = '';
  if (paths.length < 3 || paths[2] === '') {
    active = 'home';
  } else {
    active = paths[2];
  }
    return (
        <>
          <div className="list-group">
            <Link to="/tuiter/home" className="list-group-item"><i className="fab fa-twitter"></i></Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
              <i className="fas fa-home"></i>
              <span className="d-none d-xl-inline ms-1">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
              <i className="fas fa-hashtag"></i>
              <span className="d-none d-xl-inline ms-1">Explore</span>
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
              <i className="fas fa-bell"></i>
              <span className="d-none d-xl-inline ms-1">Notifications</span>
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
              <i className="fas fa-envelope"></i>
              <span className="d-none d-xl-inline ms-1">Messages</span>
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
              <i className="fas fa-bookmark"></i>
              <span className="d-none d-xl-inline ms-1">Bookmarks</span>
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
              <i className="fas fa-list"></i>
              <span className="d-none d-xl-inline ms-1">Lists</span>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${(active === 'profile' || active === 'edit-profile') ? 'active' : ''}`}>
              <i className="fas fa-user"></i>
              <span className="d-none d-xl-inline ms-1">Profile</span>
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
              <span className="fa-stack fa-1x wd-fa-stack">
                <i className="fas fa-circle fa-stack-1x"></i>
                <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black wd-half-inner-stack"></i>
              </span>
              <span className="d-none d-xl-inline ms-1">More</span>
            </Link>
            <Link to="/" className="list-group-item">
              <i className="bi bi-tag"></i>
              <span className="d-none d-xl-inline ms-1">Lab</span>
            </Link>
          </div>
          <div className="d-grid mt-2">
            <Link className="btn btn-primary btn-block rounded-pill">Tuit</Link>
          </div>
        </>
    );
};
export default NavigationSidebar;