import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddedBooks = () => {
    const { user } = useContext(AuthContext);
    const { data: userBooks = [], isLoading, refetch } = useQuery({
        queryKey: ['userBooks'],
        queryFn: () => fetch(`https://recyclelib-server.vercel.app/allbooks/${user?.email}`)
            .then(res => res.json())
    })

    const handleDelete = (id) => {
        fetch(`https://recyclelib-server.vercel.app/allbooks/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Book deleted successfully');
                }
            })
    }
    const handleAdvertisement = (AdBookData) => {
        fetch('https://recyclelib-server.vercel.app/advertisement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AdBookData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    if (isLoading) {
        return <Loading></Loading>;
    }
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
                            <td>{book.bookSoldStatus}</td>
                            {book?.bookSoldStatus === 'Available' ? <td><button onClick={() => handleAdvertisement(book)}>Promote</button></td> : <td></td>}
                            <td><button onClick={() => handleDelete(book._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AddedBooks;