import React from 'react';

function VideoPlayer({autoplay, videoID}) {
    return (
        <>
            <iframe className={'VideoPlayer'}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoID}?autoplay=${autoplay? 1 : 0}&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen></iframe>
        </>
    );
}

export default VideoPlayer;