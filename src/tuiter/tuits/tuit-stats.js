import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({
  tuit = {
    _id: 234,
    topic: "Space",
    username: "SpaceX",
    time: "2h",
    title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    image: "spacex.jpg",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    dislikes: 100,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
}) => {
  const dispatch = useDispatch();
  return (
      <div className="mt-3 row wd-post-icon-group text-white-50">
        <div className="col-2"><span className="wd-clickable"><i className="bi bi-chat me-1"></i>{tuit.replies}</span></div>
        <div className="col-2"><span className="wd-clickable"><i className="fas fa-retweet me-1"></i>{tuit.retuits}</span></div>
        <div className="col-2">
          <span className="wd-clickable" onClick={() => dispatch(updateTuitThunk(
              {
                ...tuit,
                likes: tuit.likes + 1
              }
          ))}>
            <i className="bi bi-heart-fill text-danger me-1"></i>
            {tuit.likes}
          </span>
        </div>
        <div className="col-2">
          <span className="wd-clickable" onClick={() => dispatch(updateTuitThunk(
              {
                ...tuit,
                dislikes: tuit.dislikes + 1
              }
          ))}>
            <i className="bi bi-hand-thumbs-down-fill me-1"></i>
            {tuit.dislikes}
          </span>
        </div>
        <div className="col-2"><i className="bi bi-upload wd-clickable"></i></div>
      </div>
  );
};
export default TuitStats;