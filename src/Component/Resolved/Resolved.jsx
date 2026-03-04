import React from 'react';

const Resolved = ({solved}) => {
   if(solved.length==0){
    return <p className='text-lg text-black my-4 mx-2'>No resolved tasks yet.</p>
   }
    
    return (
        <div className='flex flex-col justify-between'>
        {
            solved.map(sol=> {return(<div key={sol.id} className='card card-border bg-gray-100 w-96 p-5 mb-3 mt-3'>{sol.title}</div>)})
        }
        </div>
    );
};

export default Resolved;