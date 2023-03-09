import React from 'react';
import '../styles/ProjectPreview.css'
import {isVideo} from "../utils";
import VideoPlayer from "./VideoPlayer";

function ProjectPreview({asset, setPreviewPopUp}) {
    console.log(asset)
    return (
        <div className={'ProjectPreview'} onClick={() => setPreviewPopUp(asset)}>
            {
                isVideo(asset)
                    ?
                    (() => {
                        let assetInListForm = asset.split('.')
                        return <VideoPlayer
                            autoplay={false}
                            videoID={assetInListForm[assetInListForm.length - 2]}
                            control={false}
                        />
                    })()
                    :
                    <img src={asset} alt=""/>
            }
            <div className={'transparent-layer'} onClick={() => setPreviewPopUp(asset)}></div>
        </div>
    );
}

export default ProjectPreview;