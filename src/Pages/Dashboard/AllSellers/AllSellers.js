import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: allSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['allSeller'],
        queryFn: () => fetch(`https://recyclelib-server.vercel.app/users/seller`)
            .then(res => res.json())
    })
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
                        allSeller.map((buyer, i) => <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button className='btn btn-xs btn-danger'>{buyer?.status === 'varified' ? 'Verified' : 'Not verified'}</button></td>
                            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;