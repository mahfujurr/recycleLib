import React from 'react';
import { useLoaderData } from 'react-router-dom';


import SingleBook from './SingleBook';

const CategoryBooks = () => {
    const booksDetails = useLoaderData();
    return (
        <div className='grid grid-cols-1 gap-10 py-10 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200'>
            {
                booksDetails.map((bookDetails) =><SingleBook bookDetails={bookDetails} key={bookDetails._id} ></SingleBook>)
            }
        </div>
    );
};

export default CategoryBooks;