import React from 'react'

const transactionHistory = (props) => {
  return (
    <div className='flex justify-center space-y-20 mx-12'>
        <div className='block px-4 py-2 mt-2 text-black bg-slate-200 border-2 
        border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none'>
            {props.transactions.map(transaction => {
                return (<div key={transaction.id} className='block text-xl font-semibold text-black mt-6'>
                          <div>Transaction id: {transaction.id}</div>
                          <div>Cost: ${transaction.cost}</div>
                          <div>Reason: {transaction.reason}</div>
                          <div>Time: {transaction.createdAt}</div>
                        </div>);
            })}
            {/* <div className='block text-xl font-semibold text-black'> */}
            {/*     Cost:<br/><br/><br/> */}
            {/*     Description:<br/><br/><br/> */}
            {/*     Date Created: */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default transactionHistory
