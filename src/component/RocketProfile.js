import React from "react";
import { useSelector } from "react-redux";

const UpdateRocket = () => {
  const rockets = useSelector((state) => state.rocketReducer.rockets);
  const reservedRockets = rockets.filter((item) => item.reserved === true);
  return (
    <table >
      <theader className="t_head">
        My Rockets 
      </theader>
      <tbody className="t_body">
        {reservedRockets.map((item) => (
          <tr key={item.id}>{item.name}</tr>
        ))}
      </tbody>
    </table>
  );
};
export default UpdateRocket;
