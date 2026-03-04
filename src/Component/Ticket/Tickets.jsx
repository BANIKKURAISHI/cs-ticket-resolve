import React, { use } from 'react';
import Ticket from './Ticket';

const Tickets = ({fetchData,handleProblems}) => {
    const customers=use(fetchData)
    return (
        <div className='grid grid-cols-2 gap-8'>
            {
             customers.map(ticket=><Ticket  key={ticket.id} ticket={ticket} handleProblems={handleProblems}></Ticket>)   
            }
        </div>
    );
};

export default Tickets;