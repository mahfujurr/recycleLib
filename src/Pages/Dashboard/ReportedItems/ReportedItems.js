import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const ReportedItems = () => {
    const { data: reportedbooks = [], isLoading , refetch} = useQuery({
        queryKey: ['reportedbooks'],
        queryFn: () => fetch('http://localhost:5000/reportedbooks')
            .then(res => res.json())
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reportedbooks/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('User deleted successfully');
                }
            })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <table className="table text-center w-full backdrop-blur-sm bg-white/30">
                <thead className=''>
                    <tr>
                        <th></th>
                        <th>Cover</th>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportedbooks.map((book, i) => <tr key={book._id}>
                            <th>{i + 1}</th>
                            <td><img src={book.photo} className="w-16" alt="" /></td>
                            <td>{book.bookName}</td>
                            <td>{book.bookPrice}</td>
                            <td><button onClick={() => handleDelete(book._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ReportedItems;