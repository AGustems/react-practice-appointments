import React, {useState, useEffect} from "react"
import Form from "./components/Form"
import Appointment from "./components/Appointment"

function App() {
  // Appointments in the Local Storage
  let initialAppointments= JSON.parse(localStorage.getItem('appointments'))
  if(!initialAppointments){
    initialAppointments = []
  }

  // Appointments List State
  const[appointments, saveAppointments] = useState(initialAppointments);

  // UseEffect to track the Appointments List State changes
  useEffect(() => {
    let initialAppointments= JSON.parse(localStorage.getItem('appointments'))
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else{
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments]);

  // Function that takes the current appointments and adds a new one
  const createAppointment = appointment => {
    saveAppointments(appointments => ([
      ...appointments,
      appointment
    ]))
  }

  // Function that eliminates an appointment with their id
  const eliminateAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    saveAppointments(newAppointments)
  }

  // Conditional title
  const title = appointments.length === 0 ? 'There are no appointments' : 'Administrate your appointments'

  return (
    <>
      <h1>Patient Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                eliminateAppointment={eliminateAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;