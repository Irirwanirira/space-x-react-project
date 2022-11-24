import React from "react";
import MissionProfile from "./missionDisplay";
import UpdateRocket from "./RocketProfile";


const MyProfile = () => {

  return(
    <div className="profile_d">
      <UpdateRocket />
      <MissionProfile />
    </div>
  )
  
};

export default MyProfile;
