import React from 'react';
import s from "./DetailsButton.module.scss"

type DetailsButton = {
    title: string
    backgroundColor?: string
    color?: string
    onClick: () => void
}

const DetailsButton: React.FC<DetailsButton> = ({title, backgroundColor, color, onClick}) => {
    return <button className={s.button} style={{backgroundColor, color}} onClick={onClick}> {title} </button>
};

export default DetailsButton;