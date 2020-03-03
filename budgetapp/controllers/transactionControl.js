//get all transactions
// route /api/v1/transactions
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

//add transaction
// route POST /api/v1/transactions
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}

//delete transactions
// route /api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}