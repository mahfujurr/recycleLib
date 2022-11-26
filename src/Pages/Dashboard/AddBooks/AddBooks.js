import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const AddBooks = () => {
  

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const handleAdd = (data) => {
        const bookName = data.bookName;
        const bookPrice = data.price;
        const bookCondition = data.condition;
        const mobileNumber = data.mobileNumber;
        const bookownerLocation = data.bookownerLocation;
        const bookCategory = data.bookCategory;
        const bookDetails = data.bookDetails;
        const bookPYear = data.bookPYear;
        const email = user.email;
        const photo = data.photoURL;
        
        const allBooks = {
            bookName,
            bookPrice,
            bookCondition,
            mobileNumber,
            bookownerLocation,
            bookCategory,
            bookDetails,
            bookPYear,
            email,
            photo,
            
        }
        // setSignUPError('');
        console.log(allBooks)
        fetch('http://localhost:5000/allbooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allBooks)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email);
            })

    }


    return (
        <div>

            <form onSubmit={handleSubmit(handleAdd)} className="w-full h-auto bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4 flex items-center justify-center" >
                <div className="bg-white  rounded-2xl py-6 px-10 sm:max-w-md w-full backdrop-blur-sm bg-white/30 ">
                    <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-4">
                        Enter book information
                    </div>
                    <div className="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Book Name</span></label>
                            <input type="text" {...register("bookName", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Price</span></label>
                            <input defaultValue={'$'} type="text" {...register("price", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input defaultValue={'+880'} type="text" {...register("mobileNumber", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("bookownerLocation", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Book Details</span></label>
                            <input type="text" {...register("bookDetails", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Book Purchasing Year</span></label>
                            <input type="text" {...register("bookPYear", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Book Picture</span></label>
                            <input type="text" {...register("photoURL", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs input-sm" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Select Book Condition</span></label>
                            <select
                                {...register("condition")}
                                className=" select select-bordered select-sm w-full max-w-xs">
                                <option defaultValue>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>

                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Select Book Category</span></label>
                            <select
                                {...register("bookCategory")}
                                className=" select select-bordered select-sm w-full max-w-xs">
                                <option>comic</option>
                                <option>romance</option>
                                <option>sci-fi</option>

                            </select>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="border-sky-400 " value="" />
                            <div className="px-3 text-gray-500">
                                I accept terms & conditions
                            </div>
                        </div>
                        <div className="flex justify-center my-6">
                            <button value="Add Book" type="submit" className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                                Add Book
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;