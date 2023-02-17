import React from 'react';
import VideoPlayer from "../../../../common/components/VideoPlayer/VideoPlayer";
// @ts-ignore
import loading from "../../../../common/assets/video/loading.mp4"

const SolarPanels = () => {

    if(true) {
        return <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
            <VideoPlayer link={loading} style={{width: "80px"}}/>
        </div>
    }

    return (
        <div>

        </div>
    );
};

export default SolarPanels;