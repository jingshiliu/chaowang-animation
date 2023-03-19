import React, {useState, memo} from 'react';
import {AiFillVideoCamera, AiFillPlayCircle} from "react-icons/ai";
import {FcVideoCall} from "react-icons/fc";
import styled from 'styled-components';
import '../styles/ProjectPreview.css'
import {isVideo} from "../utils";


function ProjectPreview({asset, setPreviewPopUp}) {

    return (
        <div className={'ProjectPreview'} onClick={() => setPreviewPopUp(asset)}>
            {
                isVideo(asset)
                    ?
                    (() => {
                        let assetInListForm = asset.split('.')
                        const StyledPlayIcon = styled(AiFillPlayCircle)`color: red; font-size: 80px`;
                        return <>
                            <img className={'project-preview-thumbnail'}
                                 src={`https://img.youtube.com/vi/${assetInListForm[assetInListForm.length - 2]}/maxresdefault.jpg`}
                                 alt=""/>
                            <div className="video-play-icon-wrapper">
                                {/*<AiFillPlayCircle className={'video-play-icon'} />*/}
                                <StyledPlayIcon />
                            </div>
                        </>
                    })()
                    :
                    <img className={'project-preview-thumbnail'} src={asset} alt=""/>
            }
        </div>
    );
}

export default memo(ProjectPreview, (prevProps, nextProps) => {
    console.log(prevProps.asset === nextProps.asset, prevProps.asset, nextProps.asset)
    return prevProps.asset === nextProps.asset;
});