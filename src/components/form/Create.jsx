import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Create = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a user</h1>
                <form className='form__container' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className='form-control' placeholder='Enter name' onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Name</label>
                        <input type="email" name="email" className='form-control' placeholder='Enter email' onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber" className='form-control' placeholder='Enter phone number' onChange={(event) => setFormData({ ...formData, phoneNumber: event.target.value })} />
                    </div>
                    <Button variant="contained">Add user</Button>
                    <Link className='btn btn-primary ms-3' to={`/`}>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Create;