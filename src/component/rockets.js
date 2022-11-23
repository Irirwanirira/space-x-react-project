import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/Rocket/rocketSlice';
import RocketsDisplay from './rocketDisplay';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducer.rockets);
  if (rockets.length === 0) {
    dispatch(fetchRockets());
  }

  return (
    <div className="rockets_prop">
      {rockets.map((rocket) => (
        <RocketsDisplay key={rocket.id} rocketDetails={rocket} />
      ))}
    </div>
  );
};
export default Rockets;
