import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
  return (`
    <ul class="list-group">
      ${posts.map(PostItem).join('')}
    </ul>
  `);
};
export default PostList;