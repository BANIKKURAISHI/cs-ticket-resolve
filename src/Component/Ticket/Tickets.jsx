
import Ticket from './Ticket';

const Tickets = ({allCart,handleProblems}) => {
    
    return (
        <div className='grid grid-rows-1 md:grid-rows-1 lg:grid-cols-1 xl:grid-cols-2 gap-8'>
            {
             allCart.map(ticket=><Ticket   key={ticket.id} ticket={ticket} handleProblems={handleProblems}></Ticket>)   
            }
        </div>
    );
};

export default Tickets;