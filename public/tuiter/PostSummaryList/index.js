import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return (`
    <ul class="list-group mt-2">
      ${posts.map(PostSummaryItem).join('')}
    </ul>
  `);
};
export default PostSummaryList;