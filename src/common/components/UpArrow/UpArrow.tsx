import React, {useEffect, useState} from 'react';
import {SlArrowUp} from "react-icons/sl";
import s from './UpArrow.module.scss'

const UpArrow = () => {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowArrow(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={s.arrowUpBlock}>
            {showArrow && (
                <div className={s.arrowUp} onClick={scrollToTop}>
                    <SlArrowUp fontSize="22px" />
                </div>
            )}
        </div>
    );
};

export default UpArrow;