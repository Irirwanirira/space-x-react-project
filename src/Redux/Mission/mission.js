import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://api.spacexdata.com/v3/missions';

const getMission = async () => {
    const resolve = await fetch (url);
    const mission = await resolve.json();
    return mission
}

export const fetchMission = createAsyncThunk("mission/fetchMission", getMission);

const MissionSlice= createSlice({
    name: "mission",
    initialState: {
      missions: [],
      status: "mission_display",
      error: null,
    },

    reducers: {
        missionReserve: (state, action) => {
          const newState = state.missions.map((mission) => {
            if (mission.id !== action.payload) return mission;
            return { ...mission, reserved: !mission.reserved };
          });
          state.rockets = newState;
        },
      },
})

export default MissionSlice;
