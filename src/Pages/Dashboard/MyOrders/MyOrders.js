import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: bookedInfo = [], isLoading } = useQuery({
        queryKey: ['bookedInfo'],
        queryFn: () => fetch(`https://recyclelib-server.vercel.app/dashboard/mybook/${user?.email}`)
            .then(res => res.json())
    })
    return (
        <div>
            <table className="table text-center w-full backdrop-blur-sm bg-white/30">
                <thead className=''>
                    <tr>
                        <th></th>
                        <th>img</th>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookedInfo.map((book, i) => <tr key={book._id}>
                            <th>{i + 1}</th>
                            <td><img src={book.photo} className="w-16" alt="" /></td>
                            <td>{book.bName}</td>
                            <td>{book.price}</td>
                            {/* <td>{book?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                            <td><button className='btn btn-xs btn-danger'>Pay</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;