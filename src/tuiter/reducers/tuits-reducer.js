import {createSlice} from "@reduxjs/toolkit";
import {deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}

const currentUser = {
  "username": "NASA",
  "handle": "@nasa",
  "image": "nasa-logo.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
      (state) => {
        state.loading = true;
        state.tuits = [];
      },
    [findTuitsThunk.fulfilled]:
      (state, {payload}) => {
        state.loading = false;
        state.tuits = payload;
      },
    [findTuitsThunk.rejected]:
      (state) => {
        state.loading = false;
      },
    [deleteTuitThunk.fulfilled]:
      (state, {payload}) => {
        state.loading = false;
        state.tuits = state.tuits.filter(t => t._id !== payload)
      },
  },
  reducers: { // not going to use these
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      state.splice(index, 1);
    },
    likeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state[tuitIndex].liked = true;
      state[tuitIndex].likes++;
    },
    unlikeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
      state[tuitIndex].liked = false;
      state[tuitIndex].likes--;
    }
  }
});
export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;