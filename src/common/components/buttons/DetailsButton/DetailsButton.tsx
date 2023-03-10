import React from 'react';
import s from "./DetailsButton.module.scss"

type DetailsButton = {
    title: string
}

const DetailsButton: React.FC<DetailsButton> = ({title}) => {
    return <button className={s.button}> {title} </button>
};

export default DetailsButton;