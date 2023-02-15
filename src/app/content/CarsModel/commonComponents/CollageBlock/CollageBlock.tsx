import React from 'react';
import s from './CollageBlock.module.scss'
import SalonContainer from "./SalonContainer/SalonContainer";
// // @ts-ignore
// import MSInteriorDesktop from '../../../../../../common/assets/MSInteriorDesktop.jfif'
// // @ts-ignore
// import MSInteriorGridDesktop from '../../../../../../common/assets/MSInteriorGridDesktop.jfif'
// // @ts-ignore
// import video from '../../../../../../common/assets/video/audio.mp4'

type CollageBlockPropsType = {
    data: DataProps[]
}

export type DataProps = {
    backgroundImage?: string
    videoLink?: string
    title: string
    description: string
    imagePosition: "row-reverse" | "row"
    flex: "flex-start" | "flex-end"
}

const CollageBlock: React.FC<CollageBlockPropsType> = ({data}) => {
    return (
        <div className={s.salonContainer}>
            <div className={s.salonBlock}>
                {/*<SalonContainer title={title}*/}
                {/*                description={description}*/}
                {/*                backgroundImage={backgroundImage}/>*/}
                {/*<SalonContainer title={title}*/}
                {/*                description={description}*/}
                {/*                videoLink={videoLink}*/}
                {/*                position={"row-reverse"}*/}
                {/*                start={"flex-start"}/>*/}
                {/*<SalonContainer title={title}*/}
                {/*                description={description}*/}
                {/*                backgroundImage={backgroundImage}/>*/}
                {data.map((data, i) => <SalonContainer key={i}
                                                       position={data.imagePosition}
                                                       start={data.flex}
                                                       title={data.title}
                                                       description={data.description}
                                                       backgroundImage={data.backgroundImage}
                                                       videoLink={data.videoLink}/>)}
            </div>
        </div>
    );
};

export default CollageBlock;