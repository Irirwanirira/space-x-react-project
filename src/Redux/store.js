import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rocket/rocketSlice';
import MissionReducer from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    rocketReducer,
    missions: MissionReducer,
  },
});

export default store;
