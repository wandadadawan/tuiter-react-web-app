import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const postsArray = useSelector(state => state.tuitsList);
  return (
      <ul className="list-group">
        {postsArray.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}
      </ul>
  );
};
export default TuitsList;