import React from 'react';
import s from './Footer.module.scss'

export type FooterPropsType = {
    description: "yes" | "no"
}

const Footer: React.FC<FooterPropsType> = ({description}) => {
    return (
        <div className={s.mainContainer}>
            {description === "yes"
            ? <div className={s.descriptionContainer}>
                    <span className={s.description}>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. </span>
                    <span className={s.link}>Learn more about Standard Connectivity and any limitations.</span>
                </div>
            : ''
            }

            <div className={s.menuContainer}>
                <span className={s.menuText}>Tesla © 2023</span>
                <span className={s.menuText}>Privacy & Legal</span>
                <span className={s.menuText}>Vehicle Recalls</span>
                <span className={s.menuText}>Contact</span>
                <span className={s.menuText}>Careers</span>
                <span className={s.menuText}>News</span>
                <span className={s.menuText}>Engage</span>
                <span className={s.menuText}>Locations</span>
            </div>
        </div>
    );
};

export default Footer;