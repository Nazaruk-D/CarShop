import React, {useCallback, useEffect, useState} from 'react';
import s from './Displays.module.scss'
// @ts-ignore
import video1 from '../../../../../../common/assets/video/1.mp4'
// @ts-ignore
import video2 from '../../../../../../common/assets/video/2.mp4'
// @ts-ignore
import video3 from '../../../../../../common/assets/video/ModelSDisplay.mp4'
// @ts-ignore
import video4 from '../../../../../../common/assets/video/4.mp4'
// @ts-ignore
import video5 from '../../../../../../common/assets/video/5.mp4'
import VideoBlock from "./VideoBlock/VideoBlock";


export type VideoType = {
    id: number
    link: string
    title: string
    description: string
}

const info: VideoType[] = [
    {
        id: 1,
        link: video1,
        title: 'Cinematic Experience',
        description: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
    },
    {
        id: 2,
        link: video2,
        title: 'Yoke Steering',
        description: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.',
    },
    {
        id: 3,
        link: video3,
        title: 'Perfect Environment',
        description: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.',
    },
    {
        id: 4,
        link: video4,
        title: 'Redesigned Second Row',
        description: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
    },
    {
        id: 5,
        link: video5,
        title: 'Console-Grade Gaming',
        description: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.',
    },
]

const Displays = React.memo(() => {
    const [videoId, setVideoId] = useState<number>(1)
    const newVideo = info.find(v => v.id === videoId)
    const [duration, setDuration] = useState<number>(0)


    const changeVideoId = useCallback((num: number) => {
        setVideoId(num)
    }, [])

    useEffect(() => {
        if (duration > 1) {
            const timer = setTimeout(() => {
                if (videoId === info.length) {
                    setVideoId(1)
                } else setVideoId(videoId + 1)
            }, duration * 1000)
            return () => clearTimeout(timer);
        }
    }, [duration, videoId])

    return (
        <div className={s.displaysContainer}>
            <VideoBlock id={newVideo!.id} title={newVideo!.title} description={newVideo!.description}
                         setDuration={setDuration} link={newVideo!.link} onClick={changeVideoId}/>
        </div>
    );
})

export default Displays;