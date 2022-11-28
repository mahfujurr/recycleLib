import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingDetails/BookingModal/BookingModal';


import SingleBook from './SingleBook';

const CategoryBooks = () => {
    const [bookDetails, setBookDetails] = useState(null);
    const booksDetails = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 gap-10 py-10 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200'>
                {
                    booksDetails.map((bookDetails) => <SingleBook bookDetails={bookDetails} key={bookDetails._id} setBookDetails={setBookDetails}></SingleBook>)
                }
            </div>
            {
                bookDetails &&
                <BookingModal bookDetails={bookDetails}  ></BookingModal>
            }
        </div>
    );
};

export default CategoryBooks;