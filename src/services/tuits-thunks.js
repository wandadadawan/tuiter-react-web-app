import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './tuits-service';

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuitId) => {
      await service.deleteTuit(tuitId);
      return tuitId; // we won't want to return response.data. We want to return the tuitId
    }
);

export const createTuitThunk = createAsyncThunk( // if not using {} then will by default execute service.createTuit and also return it
    'tuits/createTuit', async (tuit) => await service.createTuit(tuit)
);

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit', async (tuit) => await service.updateTuit(tuit)
);