import NavigationTab from "./navigation-tab";
import {Link} from "react-router-dom";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
  return (
      <>
        <div className="row">
          <div className="col-11 position-relative">
            <input className="form-control rounded-pill ps-5 position-relative"
                   placeholder="Search Tuiter"/>
              <i className="fas fa-search position-absolute wd-nudge-up"></i>
          </div>
          <div className="col-1 d-flex flex-wrap align-items-center justify-content-end">
            <Link to="#"><i className="fas fa-cog fa-2x"></i></Link>
          </div>
        </div>
        <NavigationTab active="foryou"/>
        <div className="position-relative mb-2">
          <img src="/images/spacex-starship.jpg" className="w-100" alt="spacex-starship"/>
            <h2 className="position-absolute wd-main-post-image">SpaceX's Starship</h2>
        </div>
        <PostSummaryList/>
      </>
  );
};
export default ExploreComponent;