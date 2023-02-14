import React, {useEffect, useRef} from 'react';
import s from "./VideoPlayer.module.scss";
import RoundButton from "../../../../../../../common/components/RoundButton/RoundButton";
import {VideoType} from "../Displays";


type VideoPlayerPropsType = VideoType & NewType

type NewType = {
    onClick: (num: number) => void
    setDuration: (duration: any) => void
}

const VideoPlayer: React.FC<VideoPlayerPropsType> = ({id, description, title, link, onClick, setDuration}) => {
    const sumButton = [1, 2, 3, 4, 5]
    let videoRef: any = useRef()
    let refDuration: number;

    useEffect(() => {
        const timer = setTimeout(() => {
            refDuration = videoRef.current.duration
            if (refDuration) {
                setDuration(refDuration)
            }
        }, 400)
        return () => clearTimeout(timer);
    }, [id])

    return (
        <>
            <div className={s.videoBlock}>
                <div className={s.video}>
                    <video
                        ref={videoRef}
                        autoPlay
                        id="my-player"
                        className={s.videoJs}
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
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.fullDescription}>
                    <div style={{marginBottom: '20px'}}>
                        {sumButton.map( b => b === id
                            ? <RoundButton key={b} onClick={() => onClick(b)} color={'white'}/>
                            : <RoundButton key={b} onClick={() => onClick(b)} color={'#5C5E62'}/>
                        )}
                    </div>
                    <div className={s.title}>{title}</div>
                    <div className={s.description}>{description}</div>
                </div>
            </div>
        </>
    );
};

export default VideoPlayer;