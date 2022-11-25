import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission, spacejet } from '../Redux/Mission/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, status } = useSelector((state) => state.missions);
  useEffect(() => {
    if (status === null) {
      dispatch(fetchMission());
    }
  }, [status, dispatch]);

  if (status === 'pending') {
    return <h1> Loading...</h1>;
  }

  const jetclick = (id) => {
    dispatch(spacejet(id));
  };
  return (
    <table className="mission_table">
      <tr id="mission_tr_h">
        <td>Mission</td>
        <td>Description</td>
        <td>Status</td>
        <td />
      </tr>
      {missions.map(({
        id, name, description, mission,
      }) => (
        <tr key={id} className="mission_tr">
          <td>{name}</td>
          <td>{description}</td>
          <td>

            {mission
              ? <button type="button" className="not_member blue">Active Member</button>
              : <button type="button" className="not_member">Not a Member</button>}

          </td>
          <td>

            {mission
              ? (
                <button
                  onClick={() => {
                    jetclick(id);
                  }}
                  type="button"
                  className="join_btn red"
                >
                  Leave Mission
                </button>
              )
              : (
                <button
                  onClick={() => {
                    jetclick(id);
                  }}
                  type="button"
                  className="join_btn"
                >
                  Join Mission
                </button>
              )}

          </td>
        </tr>
      ))}
    </table>
  );
};
export default Missions;
