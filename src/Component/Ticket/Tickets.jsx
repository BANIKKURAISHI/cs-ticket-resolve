import React, { use } from 'react';
import Ticket from './Ticket';

const Tickets = ({fetchData,handleProblems}) => {
    const customers=use(fetchData)
    return (
        <div className='grid grid-rows-1 md:grid-rows-1 lg:grid-cols-1 xl:grid-cols-2 gap-8'>
            {
             customers.map(ticket=><Ticket  key={ticket.id} ticket={ticket} handleProblems={handleProblems}></Ticket>)   
            }
        </div>
    );
};

export default Tickets;