import React from "react";
import { useSelector } from "react-redux";

const MissionProfile = () => {
    const { missions} = useSelector((state) => state.missions);
    const MissionStatus = missions.filter((item) => item.mission === true);
    return ( 
        <table>
            <thead className="t_head"> My mission</thead>
            <tbody className="t_body">
                {MissionStatus.map((item) => <tr key={item.id}>{item.name}</tr>)}
            </tbody>
        </table>
     );
};

export default MissionProfile;