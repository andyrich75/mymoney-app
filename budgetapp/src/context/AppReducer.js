export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id !== 
                    action.payload)
            }
        default:
            return state;

    }
}