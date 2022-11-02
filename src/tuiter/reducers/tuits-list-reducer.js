import {createSlice} from "@reduxjs/toolkit";
import tuitsArray from "../data/tuits.json";

const tuitsListReducer = createSlice({
  name: "tuits-list",
  initialState: tuitsArray
});
export default tuitsListReducer.reducer;