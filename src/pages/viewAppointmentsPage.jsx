import React from 'react'
import ViewAppointments from '../components/appointment/viewAppointments'

const viewAppointmentsPage = () => {
  return (
    <div className='w-full h-screen pt-16 bg-slate-50 space-y-7'>
        <h3 className='text-3xl font-semibol text-center text-black'>Appointment History</h3>
        <ViewAppointments/>
    </div>
  )
}

export default viewAppointmentsPage