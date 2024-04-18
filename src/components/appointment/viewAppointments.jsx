import React, { useState, useEffect } from 'react'
import { getAppointmentsByAccountId } from '../../services/AppointmentService.js';


const ViewAppointments = () => {

  const [appointments, updateAppointments] = useState([]);

  useEffect(() => {
      (async () => {
          const response = await getAppointmentsByAccountId();
          console.log(response);
          updateAppointments(response);
      })();
  }, []);

  return (
    <div className='flex justify-center space-y-20'>
        <div className='block px-4 py-2 mt-2 text-black bg-slate-200 border-2 
        border-black rounded-xl focus:border-slate-400 focus:ring-purple-300 focus:outline-none'>
            <div className='block text-xl font-semibold text-black'>
                {appointments.map(appointment => {
                    return (<div key={appointment.id.value} className="container mb-10">
                                <div>Appointment id: {appointment.id.value}</div>
                                <div>Appointment start: {appointment.appointmentStartDateTime}</div>
                                <div>Appointment end: {appointment.appointmentEndDateTime}</div>
                                <div>Appointment status: {appointment.appointmentStatus}</div>
                                <div>Pet id: {appointment.petId}</div>
                                <div>Description: {appointment.description}</div>
                                <div>Availability id: {appointment.availabilityId}</div>
                                <div>Payment id: {appointment.paymentId}</div>
                                <div>Payment status: {appointment.paymentStatus}</div>
                                <div>Cost: {appointment.cost}</div>
                                <div>Error messages: {appointment.errorMessages}</div>
                            </div>);
                })}
                {/* Date of Appointment<br/><br/><br/> */}
                {/* Time:<br/><br/><br/> */}
            </div>
        </div>
    </div>
  )
}

export default ViewAppointments;
