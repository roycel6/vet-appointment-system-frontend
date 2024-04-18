import React, { useState, useEffect } from 'react'
import TransactionHistory from '../components/transactions/transactionHistory.jsx'
import { getBalanceByAccountId, getTransactionsByAccountId } from '../services/PaymentService.js';

const TransactionHistoryPage = () => {

  const [balance, updateBalance] = useState(0);
  const [transactions, updateTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      const balanceResponse = await getBalanceByAccountId();
      updateBalance(balanceResponse.body.credit);
      const transactionsResponse = await getTransactionsByAccountId();
      updateTransactions(transactionsResponse.body);
      console.log(transactionsResponse.body);
    })();
  }, []);

  return (
    <div className='w-full h-screen pt-16 bg-slate-50 space-y-7'>
        <h3 className='text-3xl font-semibol text-center text-black'>Current Balance</h3>
        <span className='block text-7xl font-bold text-center text-black'>${balance}</span>
        <h3 className='text-3xl font-semibol text-center text-black'>Transaction History</h3>
        <TransactionHistory transactions={transactions} />
    </div>
  )
}

export default TransactionHistoryPage
