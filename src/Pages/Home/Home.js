import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);

    const { data: advertisedBooks = [] } = useQuery({
        queryKey: ['advertisedBooks'],
        queryFn: () => fetch(`https://recyclelib-server.vercel.app/advertisement`)
            .then(res => res.json())
    })
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
                <h1 className='text-4xl lg:text-5xl font-bold pb-5'>Sell your old book now!</h1>
                <h1 className='text-2xl font-semibold'>Your trash might be someone's treasure</h1>
                <p className=' lg:px-48'>When you buy a used book, you never know what you are going to get. Inscriptions in margins or dedications in the front page. You’re taking part in a shared history and better yet, you’re free to add your own little mark along the way too.</p>
            </div>
            <div className='mt-10'>
                <img className='rounded-2xl' src="https://images.unsplash.com/photo-1529473814998-077b4fec6770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            {advertisedBooks.length > 0 &&
                <div className='text-4xl font-bold'>
                    <h1 className='py-5'>Advertised Book</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>

                        {
                            advertisedBooks.map(book =>

                                <Link key={book._id} to={`/categories/${book.bookCategory}`}>
                                    <h1 className='py-5 ease-in-out duration-300 px-10 rounded-2xl backdrop-blur-sm bg-white/30'>{book.bookName}</h1>

                                </Link>



                            )
                        }


                    </div>
                </div>
            }
            <div>
                <h1 className='text-4xl font-bold py-10'>Browse books by categories</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    categories.map(c => <Link key={c._id} to={`/categories/${c.categoryid}`}><h1 className='p-7 ease-in-out duration-300 text-3xl font-semibold backdrop-blur-sm bg-white/40 rounded-2xl hover:bg-white/60'>{c.category}</h1></Link>)
                }


            </div>
            <div>
                <div className='bg-black text-white px-10 py-5 mt-10 rounded-2xl'>
                    <h1 className='text-2xl font-semibold mb-5'>Keep getting our updates</h1>
                    <input type="text" className='rounded-2xl p-2 text-black' placeholder='Email' />
                    
                        <button className='ml-3 ease-in-out duration-300 px-3 py-2 rounded-xl border-2 hover:bg-white hover:text-black'>Subscribe</button>
                    
                </div>
            </div>
            <a href='https://wa.me/qr/PLKN6DKQI2KLG1'>
                <img className='w-16 lg:w-24   fixed bottom-5 right-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="" />
            </a>
        </div >
    );
};

export default Home;