import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "../reducers/tuits-reducer";

const TuitStats = ({
  tuit = {
    _id: 234,
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    image: "spacex.jpg",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
}) => {
  const dispatch = useDispatch();
  const unlikeTuitHandler = (tuit) => {
    dispatch(unlikeTuit(tuit));
  };

  const likeTuitHandler = (tuit) => {
    dispatch(likeTuit(tuit));
  };

  return (
      <div className="mt-3 row wd-post-icon-group text-white-50">
        <div className="col-3"><i className="bi bi-chat me-3"></i>{tuit.replies}</div>
        <div className="col-3"><i className="fas fa-retweet me-3"></i>{tuit.retuits}</div>
        {
          tuit.liked && <div className="col-3" onClick={() => unlikeTuitHandler(tuit)}><i className="bi bi-heart-fill text-danger me-3"></i>{tuit.likes}</div>
        }
        {
          !tuit.liked && <div className="col-3" onClick={() => likeTuitHandler(tuit)}><i className="bi bi-heart me-3"></i>{tuit.likes}</div>
        }
        <div className="col-3"><i className="bi bi-upload me-3"></i></div>
      </div>
  );
};
export default TuitStats;