import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({
    tuit = {
      _id: 234,
      topic: "Space",
      username: "SpaceX",
      time: "2h",
      title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      image: "spacex.jpg",
      handle: "@spacex",
      tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
      <li className="list-group-item wd-post">
        <div className="row mb-2">
          <div className="col-auto">
            <img src={`../../images/${tuit.image}`} width={45} height={45} className="wd-post-summary-image rounded-circle" alt={tuit.image}/>
          </div>
          <div className="col-10 pe-0">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>
            <span className="fw-bold text-white">{tuit.username}</span>
            <i className="bi bi-patch-check-fill ms-1 me-1"></i>
            <span className="text-secondary">{tuit.handle} · {tuit.time}<span className="float-end"><i className="fa-solid fa-ellipsis"></i></span></span>
            <div>{tuit.tuit}</div>
            <TuitStats tuit={tuit}/>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;