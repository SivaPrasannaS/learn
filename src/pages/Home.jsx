import React, { useEffect, useState } from 'react';
import UserTable from '../components/table/UserTable';
import { Link } from 'react-router-dom';
import { getAllUser } from '../services/UserApi';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getAllUser()
                .then((res) => setData(res.data))
                .catch((err) => console.log(err));
        }

        fetchData();
    }, [])

    return (
        <div className='container d-flex flex-column align-items-center mt-5'>
            <h3>User Lists</h3>
            <div className="d-flex justify-content-end w-75 mb-5">
                <div>
                    <Link className='btn btn-success' to={`/create`}>Add</Link>
                </div>
            </div>
            <UserTable data={data} />
        </div>
    );
}

export default Home;