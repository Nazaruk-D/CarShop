import React from 'react';
import s from "./Charging.module.scss"

const Charging = () => {
    return (
        <div className={s.chargingContainer}>
            <h2 className={s.title}>Raer-Wheel Drive</h2>
            <p>Home charging equipment is not included</p>
            <div className={s.checkboxContainer}>
                <div className={s.checkboxBlock}>
                    <input type="checkbox"/>
                    <p>Wall Connector</p>
                </div>
                <p>$425</p>
            </div>

            <div className={s.checkboxContainer}>
                <div className={s.checkboxBlock}>
                    <input type="checkbox"/>
                    <p>Mobile Connector</p>
                </div>
                <p>$230</p>
            </div>
        </div>
    );
};

export default Charging;