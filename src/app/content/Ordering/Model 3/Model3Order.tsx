import React, {useState} from 'react';
import s from "./../Ordering.module.scss"
import Modification from "./Modification/Modification";
import Gallery from "./Gallery/Gallery";
import HeaderBlock from "../HeaderBlock/HeaderBlock";


export const Context = React.createContext<ContextType>(["", Function]);
export type ContextType = [string, Function];

const Model3Order = () => {
    const [context, setContext] = useState("default context value");
    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery/>
                <Modification/>
            </div>
        </Context.Provider>
    );
};

export default Model3Order;