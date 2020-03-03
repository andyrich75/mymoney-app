import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//create an initial state 
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//create Global context to be passed in
export const GlobalContext = createContext(initialState);


//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transaction');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    //adding the delete function
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}