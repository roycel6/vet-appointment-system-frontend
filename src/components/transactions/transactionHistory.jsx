import React from 'react'

const transactionHistory = () => {
  return (
    <div className='flex justify-center space-y-20'>
        <div className='block w-64 px-4 py-2 mt-2 text-black bg-slate-200 border-2 
        border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none'>
            <div className='block text-xl font-semibold text-black'>
                Cost:<br/><br/><br/>
                Description:<br/><br/><br/>
                Date Created:
            </div>
        </div>
    </div>
  )
}

export default transactionHistory