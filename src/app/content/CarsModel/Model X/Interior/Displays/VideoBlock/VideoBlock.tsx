import React from 'react';
import s from "./VideoBlock.module.scss";
import RoundButton from "../../../../../../../common/components/RoundButton/RoundButton";
import {VideoType} from "../Displays";
import VideoPlayer from "../../../../../../../common/components/VideoPlayer/VideoPlayer";


type VideoPlayerPropsType = VideoType & NewType

type NewType = {
    onClick: (num: number) => void
    setDuration: (duration: number) => void
}

const VideoBlock: React.FC<VideoPlayerPropsType> = ({id, description, title, link, onClick, setDuration}) => {
    const sumButton = [1, 2, 3, 4, 5]

    return (
        <>
            <div className={s.videoBlock}>
                <div className={s.video}>
                    <VideoPlayer setDuration={setDuration} link={link} id={id} style={{borderRadius: '2%'}}/>
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

export default VideoBlock;