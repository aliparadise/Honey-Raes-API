import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            
            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/ticket/create">
                <TicketForm />
            </Route>

            <Route path="/employee/create">
                <EmployeeForm />
            </Route>
        </>
    )
}