import React from 'react';
import '../styles/ProjectPreview.css'
import {isVideo} from "../utils";
import VideoPlayer from "./VideoPlayer";

function ProjectPreview({asset, setPreviewPopUp}) {
    return (
        <div className={'ProjectPreview'} onClick={() => setPreviewPopUp(asset)}>
            {
                isVideo(asset)
                    ?
                    <VideoPlayer
                        autoplay={false}
                        videoID={asset.split('.')[1]}
                        control={false}
                        onClick={setPreviewPopUp}
                        />
                    :
                    <img src={asset} alt=""/>
            }
            <div className={'transparent-layer'} onClick={() => setPreviewPopUp(asset)}></div>
        </div>
    );
}

export default ProjectPreview;