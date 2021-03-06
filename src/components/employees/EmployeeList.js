import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialty, setSpecialty] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )
        //this useEffect function will get only the specialties
    useEffect(() => {
            const onlySpecialties = employees.map(emp => emp.specialty)
            setSpecialty(onlySpecialties.join(", "))
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [employees])

    const history = useHistory()

    return (
        <>
            <div>
                <button onClick={() => history.push("/employee/create")}>Hire Employee</button>
            </div>
            <div>
                Specialties: { employeeSpecialty}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}