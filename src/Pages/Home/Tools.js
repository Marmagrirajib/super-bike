import React, { useEffect, useState } from 'react';

import Tool from './Tool';

const Tools = () => {

    const [tools, setTools] = useState([]);
  
    useEffect( () => {
        fetch('https://murmuring-springs-55842.herokuapp.com/part')
        .then(res => res.json())
        .then(data => setTools(data));
    }, [])



    return (
        <section className='px-12 mb-56 lg:-mt-36 sm:mt-14'>
            <div>
                <div className='text-center'>
                    <h2 className='text-3xl fond-bold text-emerald-600'>Our Parts</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 lg:grid-cols-3'>
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