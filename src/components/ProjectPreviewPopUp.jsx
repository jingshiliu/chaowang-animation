import React from 'react';

import {isVideo} from "../utils";
import VideoPlayer from "./VideoPlayer";

function ProjectPreviewPopUp({asset, setPreviewPopUp}) {
    return (
        <div className={'ProjectPreviewPopUp'}>
            <div className={'black-background'} onClick={() => setPreviewPopUp('')}></div>

            {
                isVideo(asset) ?
                    <VideoPlayer videoID={asset.split('.')[1]} height={800} width={1000} />
                    :
                    <img src={asset} alt={""}/>
            }
        </div>
    );
}

export default ProjectPreviewPopUp;