import React from 'react';
import toast from 'react-hot-toast';



const SingleBook = ({ bookDetails, setBookDetails }) => {
    const { bookName, bookPrice, bookownerLocation, photo, dateTime, bookUsedYear, sellerName, bookOriginalPrice } = bookDetails;
    const setReportDetails = (bdata) => {
        fetch('https://recyclelib-server.vercel.app/reportedbooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Reported Successfully');
                }

            })
    }
    return (
        <div>
            <div className=' flex py-5 lg:mx-48 rounded-2xl backdrop-blur-sm bg-white/30 justify-center items-center'>
                <img src={photo} className='w-1/4 ' alt="" />
                <div className='font-semibold ml-10 w-1/3'>
                    <h1 className='text-xl font-semibold'>Book Name: {bookName}</h1>
                    <h3 className='text-2xl font-bold'>Price: {bookPrice}</h3>
                    <h3 className='text-sm mb-1'>Original Price: {bookOriginalPrice}</h3>

                    <h2 className='text-sm'>Location: {bookownerLocation}</h2>

                    <h3>Used time period: {bookUsedYear} years</h3>
                    <h3>Posted time: {dateTime}</h3>
                    <h3>Seller Name: {sellerName} </h3>
                    <label htmlFor="my-modal-3" className="btn my-2" onClick={() => setBookDetails(bookDetails)}>Book Now</label>
                    <div>
                        <button className="text-red-500 px-2 py-1 bg-slate-100 rounded-2xl " onClick={() => setReportDetails(bookDetails)}>Report Spam</button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default SingleBook;