import React from "react";
import ProfileHeader from "./ProfileHeadre";
import UserProfile from "./UserProfile";
import img8 from "./Project/Img8.jpg";

function welcome() {
    return(
        <div>
            <ProfileHeader />
            {/* <img src={img8} /> */}
            <UserProfile />
        </div>
    );
}

export default welcome;