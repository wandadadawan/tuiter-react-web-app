import PostSummaryList from "../PostSummaryList/index.js";
import SearchBar from "./SearchBar.js";
import NavTab from "./NavTab.js";
import MainPost from "./MainPost.js";

const ExploreComponent = () => {
  return (`
    ${SearchBar()}
    ${NavTab()}
    ${MainPost()}
    <div class="mb-2"></div>
    ${PostSummaryList()}
  `);
};
export default ExploreComponent;