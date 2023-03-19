import React from 'react';
import '../styles/ProjectPreviewPopUp.css'

import {isVideo} from "../utils";
import VideoPlayer from "./VideoPlayer";

function ProjectPreviewPopUp({asset, setPreviewPopUp}) {
    return (
        <div className={'ProjectPreviewPopUp'}>
            <div className={'black-background'} onClick={() => setPreviewPopUp('')}></div>
            {
                isVideo(asset) ?
                    (() => {
                        let assetInListForm = asset.split('.')
                        return <VideoPlayer
                            autoplay={false}
                            videoID={assetInListForm[assetInListForm.length - 2]}
                            height={800}
                            width={1000}
                        />
                    })()
                    :
                    <img src={asset} alt={""}/>
            }
        </div>
    );
}

export default ProjectPreviewPopUp;