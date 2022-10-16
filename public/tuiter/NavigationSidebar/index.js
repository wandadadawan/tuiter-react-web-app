const NavigationSidebar = (active) => {
  return (`
    <ul class="list-group">
      <a class="list-group-item"><i class="fab fa-twitter"></i></a>
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active === 'Home' ? 'active' : ''}">
        <i class="fas fa-home"></i>
        <span class="d-none d-xl-inline">Home</span>
      </a>
      <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === 'Explore' ? 'active' : ''}">
        <i class="fas fa-hashtag"></i>
        <span class="d-none d-xl-inline">Explore</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${active === 'Notifications' ? 'active' : ''}">
        <i class="fas fa-bell"></i>
        <span class="d-none d-xl-inline">Notifications</span>
      </a>
        <a href="#" class="list-group-item list-group-item-action ${active === 'Messages' ? 'active' : ''}">
          <i class="fas fa-envelope"></i>
          <span class="d-none d-xl-inline">Messages</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${active === 'Bookmarks' ? 'active' : ''}">
          <i class="fas fa-bookmark"></i>
          <span class="d-none d-xl-inline">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${active === 'Lists' ? 'active' : ''}">
          <i class="fas fa-list"></i>
          <span class="d-none d-xl-inline">Lists</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${active === 'Profile' ? 'active' : ''}">
          <i class="fas fa-user"></i>
          <span class="d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${active === 'More' ? 'active' : ''}">
          <span class="fa-stack fa-1x wd-fa-stack">
            <i class="fas fa-circle fa-stack-1x"></i>
            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black wd-half-inner-stack"></i>
          </span>
          <span class="d-none d-xl-inline">More</span>
        </a>
    </ul>
    <div class="d-grid mt-2">
      <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>
  `);
};
export default NavigationSidebar;