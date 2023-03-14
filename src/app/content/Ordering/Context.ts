import React from "react";

export const Context = React.createContext<ContextType>(["", Function]);
export type ContextType = [string, Function];