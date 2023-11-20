import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserTable = ({ data }) => {
    return (
        <TableContainer component={Paper} elevation={3} style={{ width: '80%', margin: '20px auto' }}>
            <Table style={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number (+91)</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.phoneNumber}</TableCell>
                                <TableCell style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Link to={`/view/${1}`} style={{ textDecoration: 'none', color: 'green' }}>View</Link>
                                    <Link to={`/update/${1}`} style={{ textDecoration: 'none', color: 'blue' }}>Update</Link>
                                    <Link to={`/delete/${2}`} style={{ textDecoration: 'none', color: 'red' }}>Delete</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

UserTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
        })
    )
};

export default UserTable;