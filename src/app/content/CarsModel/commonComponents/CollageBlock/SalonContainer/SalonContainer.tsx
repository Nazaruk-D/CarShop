import React from 'react';
import s from './SalonContainer.module.scss'

type SalonContainerPropType = {
    backgroundImage?: string
    videoLink?: string
    title: string
    description: string
    position?: "row-reverse" | "row"
    start?: "flex-start" | "flex-end"
}

const SalonContainer: React.FC<SalonContainerPropType> = ({videoLink, position, description, title, backgroundImage, start}) => {
    return (
        <div className={s.salonContainer} style={{flexDirection: position}}>
            <div className={s.image} style={{backgroundImage: `url(${backgroundImage})`}}>
                        <video
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
                            src={videoLink}
                            loop
                            data-setup='{}'>
                        </video>
            </div>
            <div className={s.descriptionContainer} style={{justifyContent: start}}>
                <div className={s.descriptionBlock}>
                    <div className={s.title}>{title}</div>
                    <div className={s.description}>{description}</div>
                </div>
            </div>
        </div>
    );
};

export default SalonContainer;