import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [hire, updateHire] = useState({
        name: "",
        specialty: ""
    })
    
    const history = useHistory()

    const saveHire = (evt) => {
        evt.preventDefault()

    const newHire = {
        name: hire.name,
        specialty: hire.specialty
    }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newHire)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
        }        

return (
    <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    onChange={
                        (evt) => {
                          const copy = {...hire}
                          copy.name = evt.target.value
                          updateHire(copy)
                        }
                    }    
                ></input>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Specialty:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Technical Specialty"
                    onChange={
                        (evt) => {
                            const copy = {...hire}
                            copy.specialty = evt.target.value
                            updateHire(copy)
                        }
                    }
                ></input>
            </div>
        </fieldset>
        <button className="btn btn-primary" onClick={saveHire}>
                Hire Employee
            </button>
    </form>)
}