import React from 'react';
import s from './CollageBlock.module.scss'
import SalonContainer from "./SalonContainer/SalonContainer";

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