import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUserData } from '../../services/UserApi';

const Update = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            await getUserById(id)
                .then((res) => setFormData(res.data))
                .catch((err) => console.log(err));
        }
        fetchData();
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUserData(id, formData);
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Update a user</h1>
                <form className='form__container' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className='form-control' placeholder='Enter name' value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Name</label>
                        <input type="email" name="email" className='form-control' placeholder='Enter email' value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber" className='form-control' placeholder='Enter phone number' value={formData.phoneNumber} onChange={(event) => setFormData({ ...formData, phoneNumber: event.target.value })} />
                    </div>
                    <Button variant="contained" type='submit'>Update user</Button>
                    <Link className='btn btn-primary ms-3' to={`/`}>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Update;