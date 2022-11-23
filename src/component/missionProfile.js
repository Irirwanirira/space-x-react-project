/* eslint-disable */
import { useSelector } from "react-redux";
const Missionprofile = () => {
    const {missions} = useSelector ((state) => state.missions)
    const missionReserved = missions.filter((space1) => space1.mission)
return(
    <section>
        <h1>My Missions</h1>
        <ul>
        {missionReserved.map(({id, name}) => (
            <li key={id}>{name}</li>
        ))}
       
        </ul>
    </section>
)

}

export default Missionprofile;