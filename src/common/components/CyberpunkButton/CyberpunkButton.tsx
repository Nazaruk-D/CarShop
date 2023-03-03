import React, {useState} from 'react';
import s from './CyberpunkButton.module.scss'

type ButtonPropsType = {
    title: string
    color: 'white' | 'black'
    secondColor: 'white' | 'black'
    onClick: () => void
}

const CyberpunkButton: React.FC<ButtonPropsType> = ({title, onClick, color, secondColor}) => {
    const [bgc, setBgc] = useState('rgba(0,0,0,0)');
    const [clr, setClr] = useState(color);

    const onClickHandler = () => {
        onClick();
    }
    const onMouseOverHandler = () => {
        setBgc(color);
        setClr(secondColor);
    }
    const OnMouseOutHandler = () => {
        setBgc('rgba(0,0,0,0)');
        setClr(color);
    }

    return (
        <>
            <button style={{color:clr, border:`4px solid ${color}`, backgroundColor: bgc}} onMouseOver={onMouseOverHandler} onMouseOut={OnMouseOutHandler}
                    onClick={onClickHandler} className={s.button}>{title}</button>
        </>
    );
};

export default CyberpunkButton;