import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://recyclelib-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])
    return (
        <div className='flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-5 md:px-10 lg:px-48 text-center pt-12 pb-16'>
            <div>
                <h1 className='text-4xl lg:text-6xl font-bold pb-5'>Sell your old book now!</h1>
                <h1 className='text-2xl font-semibold'>Your trash might be someone's treasure</h1>
                <p className=' lg:px-48'>When you buy a used book, you never know what you are going to get. Inscriptions in margins or dedications in the front page. You’re taking part in a shared history and better yet, you’re free to add your own little mark along the way too.</p>
            </div>
            <div className='mt-10'>
                <img className='rounded-2xl' src="https://images.unsplash.com/photo-1529473814998-077b4fec6770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>

            {
                <div className='text-4xl font-bold py-10'>
                    <h1>Advertised items</h1>
                    <div>

                    </div>
                </div>
            }
            <div>
                <h1 className='text-4xl font-bold py-10'>Books Categories</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    categories.map(c => <Link key={c._id} to={`/categories/${c.categoryid}`}><h1 className='p-7 text-3xl font-semibold backdrop-blur-sm bg-white/40 rounded-2xl hover:bg-white/60'>{c.category}</h1></Link>)
                }


            </div>
        </div>
    );
};

export default Home;