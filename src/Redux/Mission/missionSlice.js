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
    status: null,
  },
  reducers: {
    spacejet: (state, action) => {
      const myState = state;
      const newState = myState.missions.map((jet1) => {
        if (jet1.id !== action.payload) {
          return jet1;
        }
        return {
          ...jet1, mission: !jet1.mission,
        };
      });
      myState.missions = newState;
    },
  },

  extraReducers: {
    [fetchMission.pending]: (state) => {
      const isPending = state;
      isPending.status = 'pending';
    },
    [fetchMission.fulfilled]: (state, action) => {
      const joinMission = state;
      joinMission.status = 'fulfilled';
      const missionData = [];
      action.payload.map((mission) => missionData.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        mission: false,
      }));
      joinMission.missions = missionData;
    },
    [fetchMission.rejected]: (state) => {
      const isRejected = state;
      isRejected.status = 'rejected';
    },
  },
});

export default MissionSlice.reducer;
export const { spacejet } = MissionSlice.actions;
