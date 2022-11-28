import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ bookDetails }) => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target; 
        const bName = bookDetails.bookName;
        const email = user.email;
        const userName = user.displayName;
        const phone = form.phone.value;
        const price = bookDetails.bookPrice;
        const buyerLocation = form.location.value;
        const info = {
            bName,
            email,
            userName,
            phone,
            price,
            buyerLocation
        }

        fetch('https://recyclelib-server.vercel.app/modalinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking Successful');
                }
                else{
                    toast.error(data.message);
                }
            })


    
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} action="">
                        <h3 className="text-lg font-bold mb-3">Book Name: {bookDetails.bookName}</h3>
                        <h3 className="text-lg font-bold mb-3">Price: {bookDetails.bookPrice}</h3>
                        <input name="displayName" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="mb-3 input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="mb-3 input w-full input-bordered" />
                        <input name="phone" type="text"  placeholder="Phone Number" className="input mb-3 w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input mb-3 w-full input-bordered" />
                        <input className='btn w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;