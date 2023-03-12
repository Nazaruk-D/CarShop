import React, {useState} from 'react';
import s from "./Ordering.module.scss"
import Gallery from "./Gallery/Gallery";
import Modification from "./Modification/Modification";
import HeaderBlock from "./HeaderBlock/HeaderBlock";

export const Context = React.createContext<ContextType>(["", Function]);
export type ContextType = [string, Function];

const Ordering = () => {
    const [context, setContext] = useState("default context value");
    console.log(context)
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

export default Ordering;