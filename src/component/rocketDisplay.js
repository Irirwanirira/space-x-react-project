/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { rocketsReserve } from '../Redux/Rocket/rocketSlice';

const RocketsDisplay = (props) => {
  const { rocketDetails } = (props);
  const {
    id, name, description, image, reserved,
  } = rocketDetails;
  const dispatch = useDispatch();

  const ReserveBtn = () => {
    dispatch(rocketsReserve(id));
  };
  return (
    <div className="rocket_details">
      <img src={image} alt={image} className="rocket_image" />
      <div>
        <h1 className="rocket_name">{name}</h1>
        <p className="rocket_description">
          {reserved && <span> Reseved</span>}
          {' '}
          {description}
        </p>
        <button type="button" onClick={ReserveBtn} className="ReserveBtn">
          {reserved && <span className='cancel_reserve' >Cancel Reservation</span>}
          {!reserved && <span  className="reserve_btn" style={{appearance:"ghost"}} > Reserve</span>}
        </button>
      </div>
    </div>
  );
};
export default RocketsDisplay;
