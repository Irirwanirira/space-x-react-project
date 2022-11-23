/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const getMission = async () => {
  const resolve = await fetch(url);
  const mission = await resolve.json();
  return mission;
};

export const fetchMission = createAsyncThunk('missions/fetchMission', getMission);

const MissionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'mission_display',
    loading: false,
  },

  extraReducers: {
    [fetchMission.pending]: (state) => {
      state.pending = true;
    },
    [fetchMission.fulfilled]: (state, action) => {
      state.loading = false,
      state.missions = action.payload;
    },
    [fetchMission.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default MissionSlice.reducer;
