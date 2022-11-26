import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryBooks = () => {
    const booksDetails = useLoaderData();
    console.log(booksDetails)
    return (
        <div>
            {
                booksDetails.map((bookDetails) => <h1>{bookDetails.bookName}</h1>)
            }
        </div>
    );
};

export default CategoryBooks;