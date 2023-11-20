import React from 'react';
import { Link } from 'react-router-dom';

const View = () => {
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>User Details</h3>
                <div className='mb-2'><strong>Name: John</strong></div>
                <div className='mb-2'><strong>Email: john@gmail.com</strong></div>
                <div className='mb-2'><strong>Phone Number: 1234567890</strong></div>
                <Link to={`/update/${1}`} className='btn btn-primary'>Edit</Link>
                <Link className='btn btn-primary ms-3' to={`/`}>Back</Link>
            </div>
        </div>
    )
}

export default View;