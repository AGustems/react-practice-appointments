import React from 'react'
import PropTypes from 'prop-types';

function Appointment({appointment, eliminateAppointment}) {
    return (
        <div className="appointment">
            <p>Pet: <span>{appointment.pet}</span></p>
            <p>Owner: <span>{appointment.owner}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Hour: <span>{appointment.hour}</span></p>
            <p>Symptoms: <span>{appointment.symptoms}</span></p>

            <button
                className="button eliminate u-full-width"
                onClick={() => eliminateAppointment(appointment.id)}>
                Eliminate &times;
            </button>
        </div>
    )
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    eliminateAppointment: PropTypes.func.isRequired
}

export default Appointment
