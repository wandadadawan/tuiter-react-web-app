import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const whoToFollowList = () => {
  return (`
    <ul class="list-group">
      <li class="list-group-item fw-bold">Who to follow</li>
      ${who.map(WhoToFollowListItem).join('')}
    </ul>
  `);
}
export default whoToFollowList;