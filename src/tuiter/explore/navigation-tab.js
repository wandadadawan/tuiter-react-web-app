import {Link} from "react-router-dom";

const NavigationTab = ({
  active = 'foryou'
}) => {
  return (
      <ul className="nav nav-tabs mt-2 mb-2">
        <li className="nav-item">
          <Link to="#" className={`nav-link ${active === 'foryou' ? 'active' : ''}`}>For you</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className={`nav-link ${active === 'trending' ? 'active' : ''}`}>Trending</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className={`nav-link ${active === 'news' ? 'active' : ''}`}>News</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className={`nav-link ${active === 'sports' ? 'active' : ''}`}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className={`nav-link ${active === 'entertainment' ? 'active' : ''}`}>Entertainment</Link>
        </li>
      </ul>
  );
};
export default NavigationTab;