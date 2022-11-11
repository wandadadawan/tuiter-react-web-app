import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import HomeComponent from "./home";
import Profile from "./profile";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import EditProfile from "./profile/edit-profile";


const store = configureStore({
  reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}
});

function Tuiter() {
  return (
      <Provider store={store}>
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar/>
          </div>
          <div className="col-10 col-md-10 col-lg-7 col-xl-6">
            <Routes>
              <Route index element={<HomeComponent/>}/>
              <Route path="home" element={<HomeComponent/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="edit-profile" element={<EditProfile/>}/>
            </Routes>
          </div>
          <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </Provider>
  );
}
export default Tuiter;