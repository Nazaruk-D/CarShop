import React, {useEffect, useRef} from 'react';

type VideoPlayerPropsType = {
    link: string
    id?: number
    setDuration?: (duration: number) => void
    style?: {}
}

const VideoPlayer: React.FC<VideoPlayerPropsType> = ({link, setDuration, id, style}) => {
    let videoRef: any = useRef()
    let refDuration: number;

    useEffect(() => {
        refDuration = videoRef.current.duration
        if (refDuration) {
            setDuration!(refDuration)
        }
    }, [id])


    return (
        <video
            ref={videoRef}
            autoPlay
            id="my-player"
            style={style}
            // className={s.videoJs}
            preload="auto"
            muted
            playsInline
            controls={false}
            data-autoplay-desktop={true}
            data-autoplay-portrait={true}
            data-autoplay-mobile={true}
            data-play-on-hover={false}
            src={link}
            loop
            data-setup='{}'>
        </video>
    );
};

export default VideoPlayer;