import React, { useEffect, useState } from 'react';

import Tool from './Tool';

const Tools = () => {

    const [tools, setTools] = useState([]);
  
    useEffect( () => {
        fetch('http://localhost:5000/part')
        .then(res => res.json())
        .then(data => setTools(data));
    }, [])



    return (
        <section className='lg:-mt-36 sm:mt-14 mb-56 px-12'>
            <div>
                <div className='text-center'>
                    <h2 className='text-3xl fond-bold text-emerald-600'>Our Parts</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    tools.map(tool => <Tool
                    key={tool._id}
                    tool={tool}
                    ></Tool>)
                }
            </div>
           
        </section>
    );
};

export default Tools;