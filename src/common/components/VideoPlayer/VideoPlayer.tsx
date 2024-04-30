import React, {useEffect, useRef} from 'react';
import s from './VideoPlayer.module.scss'
import {useAppSelector} from "../../../app/store/store";

type VideoPlayerPropsType = {
    link: string
    id?: number
    setDuration?: (duration: number) => void
    style?: {}
}

const VideoPlayer: React.FC<VideoPlayerPropsType> = ({link, setDuration, id, style}) => {
    let videoRef: any = useRef()
    let refDuration: number;
    const orderModalActive = useAppSelector(s => s.order.orderModalActive);

    useEffect(() => {
        refDuration = videoRef.current.duration
        if (refDuration) {
            setDuration!(refDuration)
        }
    }, [id])

    useEffect(() => {
        if (videoRef.current) {
            if (!orderModalActive) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [orderModalActive]);

    return (
        <video
            ref={videoRef}
            className={s.videoPlayer}
            autoPlay
            id="my-player"
            style={style}
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