import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//create an initial state 
const initialState = {
    transactions: [
        { id: 1, text: 'Salary', amount: 3000},
        { id: 2, text: 'Car Payment', amount: -300},
        { id: 3, text: 'Food', amount: -100},
        { id: 4, text: 'Check for Birthday', amount: 50},
    ]
}

//create Global context to be passed in
export const GlobalContext = createContext(initialState);


//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //adding the delete function
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}