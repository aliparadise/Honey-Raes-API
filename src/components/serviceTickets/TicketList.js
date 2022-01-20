import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Tickets.css"


export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    setTickets(data)
                })
        },
        []
    )
    
const history = useHistory()

    return (
        <>
            <div>
                <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
            </div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={ticket.emergency ? "ticket emergency" : "ticket"}> 
                            {ticket.emergency ? "🚑 " : "" }  
                            {ticket.description} submitted by {ticket.customer.name} 
                            and worked on by {ticket.employee.name}</p>
                        </div>
                    }
                )
            }
        </>
    )
}