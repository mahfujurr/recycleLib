import React from 'react';
import BookingModal from '../BookingDetails/BookingModal/BookingModal';

const SingleBook = ({bookDetails}) => {
    return (
        <div>
            <div className='flex py-5 lg:mx-48 rounded-2xl backdrop-blur-sm bg-white/30 justify-center items-center'>
                <img src={bookDetails.photo} className='w-1/4 ' alt="" />
                <div className='font-semibold ml-10 w-1/3'>
                    <h1 className='text-xl font-bold'>Book Name: {bookDetails.bookName}</h1>
                    <h3 className='text-2xl font-bold'>{bookDetails.bookPrice}</h3>
                    <h3 className='text-sm'>Original Price: { }</h3>

                    <h2 className='text-sm'>Location: {bookDetails.bookownerLocation}</h2>

                    <h3>Used time period: { }</h3>
                    <h3>Posted time: { }</h3>
                    <h3>Seller Name: { } verify mark</h3>
                    <label htmlFor="my-modal-3" className="btn" >Book Now</label>


                </div>
            </div>
            <BookingModal bookDetails={bookDetails} key={bookDetails._id} ></BookingModal>
        </div>
    );
};

export default SingleBook;