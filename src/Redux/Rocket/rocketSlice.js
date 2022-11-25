import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const getRocket = async () => {
  const res = await fetch(url);
  const rockets = await res.json();
  return rockets;
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', getRocket);
const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'Rocket_display',
    error: null,
  },
  reducers: {
    rocketsReserve: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      const rocketReserve = state;
      rocketReserve.rockets = newState;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchRockets.pending, (state) => {
      const isPending = state;
      isPending.status = 'loading';
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const isFullfilled = state;
      isFullfilled.status = 'succeeded';
      const realRocket = [];
      action.payload.map((rocket) => realRocket.push({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[1],
        reserved: false,
      }));
      isFullfilled.rockets = realRocket;
    });
  },
});

export const { rocketsReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
