import React, { use, useState } from 'react';
import Blog from '../blog/Blog';

const Content = ({ blogPromiss }) => {
    const blogs = use(blogPromiss);

    const [bookMark, setBookMark] = useState([]);
    const [readTime, setReadTime] = useState(0);

    const handleBookMark = (blog) => {
        const newBookMark = [...bookMark, blog];
        setBookMark(newBookMark);
    }
    const handleMarkAsRead = (time, id) => {
        const newReadTime = readTime + time;
        setReadTime(newReadTime);
        remainingBookMark(id)
    }
    const remainingBookMark = (id) => {
        const finalBookMark = bookMark.filter(mark => mark.id !== id);
        setBookMark(finalBookMark);
    }
    return (
        <div className='flex flex-col lg:flex-row gap-5 p-4 sm:p-6 lg:p-8'>
            <div className='w-full lg:w-[60%]'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        handleBookMark={handleBookMark}
                        handleMarkAsRead={handleMarkAsRead}
                        blog={blog}></Blog>)
                }
            </div>
            <div className='w-full lg:w-[40%] py-6 lg:py-9'>
                <button className='py-5 px-6 sm:px-10 lg:px-12 w-full bg-[#6047EC]/10 text-2xl font-bold text-[#6047EC] border border-[#6047EC] rounded-xl cursor-pointer'>
                    Spent time on read : {readTime} min
                </button>
                <div className='p-6 sm:p-8 bg-[#111111]/10 mt-6 rounded-lg'>
                    <h2 className='text-2xl font-bold mb-4'>Bookmarked Blogs : {bookMark.length}</h2>
                    <div>
                        {
                            bookMark.map(mark => <p key={mark.id} className='p-5 text-lg font-semibold bg-white mb-4 rounded-lg'>{mark.title}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
