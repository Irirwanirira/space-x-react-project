import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission, spacejet } from '../Redux/Mission/missionSlice';
/* eslint-disable */
const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMission());
  },[loading, dispatch] );

  if (loading) {
    return <h1> Loading...</h1>;
  }

  const jetclick = (id) => {
    dispatch(spacejet(id))
  }
  return (
    <div className="d-mission">
      {missions.map(({id, name, description, mission}) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>{description}</p>
          <button type="button">
          {mission ? "Active Member" : "Not A Member"}
          </button>
          <button onClick={() => {jetclick(id);}}  type="button">
            {mission ? "cancel missions" : "Join Mision"}
          </button>
        </div>
      ))}
    </div>
  );
};
export default Missions;
