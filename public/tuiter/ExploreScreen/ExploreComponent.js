import PostSummaryList from "../PostSummaryList/index.js";
import SearchBar from "./SearchBar.js";
import NavTab from "./NavTab.js";
import MainPost from "./MainPost.js";

const ExploreComponent = () => {
  return (`
    ${SearchBar()}
    ${NavTab()}
    ${MainPost()}
    ${PostSummaryList()}
  `);
};
export default ExploreComponent;