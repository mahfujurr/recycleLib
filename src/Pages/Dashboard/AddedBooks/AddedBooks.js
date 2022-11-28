import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AddedBooks = () => {
    const [userBooks, setUserBooks] = useState([]);
    // const [singleUserInfo, setSingleUserInfo] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://recyclelib-server.vercel.app/allbooks/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserBooks(data);
            })
    }, [user?.email])

    return (
        <div>
            <table className="table text-center w-full backdrop-blur-sm bg-white/30">
                <thead className=''>
                    <tr>
                        <th></th>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userBooks.map((book, i) => <tr key={book._id}>
                            <th>{i + 1}</th>
                            <td>{book.bookName}</td>
                            <td>{book.bookPrice}</td>
                            <td>Sold/Unsold</td>
                            <td>Promote</td>
                            {/* <td>{book?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AddedBooks;