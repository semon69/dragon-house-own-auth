import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <Button className='my-4 px-5' variant="secondary">National News</Button>
            <div className='ps-5'>
                
                {
                    catagories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary '>
                            {category.name}
                            
                        </Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftNav;