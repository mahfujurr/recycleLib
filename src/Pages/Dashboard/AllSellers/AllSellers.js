import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const { data: allSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['allSeller'],
        queryFn: () => fetch(`https://recyclelib-server.vercel.app/users/seller`)
            .then(res => res.json())
    })
    const handleDelete = (id) => {
        fetch(`https://recyclelib-server.vercel.app/users/${id}`, {
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>verified Status</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSeller.map((seller, i) => <tr key={seller._id}>
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button className='btn btn-xs btn-danger'>{seller?.status === 'varified' ? 'Verified' : 'Not verified'}</button></td>
                            <td><button onClick={() => handleDelete(seller._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;