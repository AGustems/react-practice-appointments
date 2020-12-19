import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Form({createAppointment}) {
    // Appointments form State
    const [appointment, getAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    })

    // Validation Form Error State
    const [error, getError] = useState(false)

    // Function to handle input changes
    const handleChange = ({target}) => {
        getAppointment(appointment => ({
            ...appointment,
            [target.name]: target.value
        }))
    }

    // Destructuring of the Appointments State
    const {pet, owner, date, hour, symptoms} = appointment;

    // Function to handle form submition
    const handleSubmit = (e) => {
        e.preventDefault();

        // Inputs validation
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === ''){
            getError(true)
            return;
        }

        // Errase the error message
        getError(false)

        // Assigning an ID
        appointment.id = uuidv4();

        // Create the appointment
        createAppointment(appointment);

        // Reset the form
        getAppointment({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        })
    }
    
    return (
        <Fragment>
            <h2>Create Appointment</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null}
            <form onSubmit={handleSubmit}>
                <label>Pet's Name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder ="Name of the Pet"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Owner's Name</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder ="Name of the owner"
                    onChange={handleChange}
                    value={owner}
                />

                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Hour</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />

                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                > Create Appointment</button>
            </form>
        </Fragment>
    )
}

Form.propTypes = {
    crearAppointment: PropTypes.func.isRequired
}

export default Form
