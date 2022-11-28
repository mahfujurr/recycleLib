import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [bookedInfo, setBookedInfo] = useState([]);
    const { user , isLoading} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/mybook/${user?.email}`)
            .then(res => res.json())
            .then(data => setBookedInfo(data))
    }, [user?.email])
    // if(isLoading){
    //     return <Loading></Loading>
    // }
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
                            <td>img</td>
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