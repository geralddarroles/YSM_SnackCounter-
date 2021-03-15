//This is a component to create a state management for the entire app - Similar to Redux

import React, { useReducer, createContext } from "react";

export default (reducer, actions, defaultValue) => {

    const Context = createContext();

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
            //boundAction: {
            //signIn:signIn(dispatch) 
            //signOut:signOut(dispatch)
            //} 
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };
    return { Context: Context, Provider: Provider };
};

