import React from 'react'
import TransactionHistory from '../components/transactions/transactionHistory.jsx'

const transactionHistoryPage = () => {
  return (
    <div className='w-full h-screen pt-16 bg-slate-50 space-y-7'>
        <h3 className='text-3xl font-semibol text-center text-black'>Current Balance</h3>
        <span className='block text-7xl font-bold text-center text-black'>$0</span>
        <h3 className='text-3xl font-semibol text-center text-black'>Transaction History</h3>
        <TransactionHistory/>
    </div>
  )
}

export default transactionHistoryPage