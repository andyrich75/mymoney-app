const Transaction = require('../models/Transaction')

//get all transactions
// route /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.find();
        
        return res.status(200).json({
            success: true,
            count: this.getTransactions.length,
            data: transactions
        });
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

//add transaction
// route POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
    res.send('POST transaction');
}

//delete transaction
// route /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
}