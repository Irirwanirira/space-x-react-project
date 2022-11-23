import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../Redux/Mission/missionSlice';
/* eslint-disable */
const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMission());
  } );

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div className="d-mission">
      {missions.map((item) => (
        <div key={item.id}>
          <h1>{item.mission_name}</h1>
          <p>{item.description}</p>
          <button type="button">
            NOT A MEMBER
          </button>
          <button type="button">
            JOIN MISSION
          </button>
        </div>
      ))}
    </div>
  );
};
export default Missions;
