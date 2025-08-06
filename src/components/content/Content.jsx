import React, { use } from 'react';
import Blog from '../blog/Blog';

const Content = ({ blogPromiss }) => {
    const blogs = use(blogPromiss);
    return (
        <div className='flex flex-col lg:flex-row gap-5 p-4 sm:p-6 lg:p-8'>
            <div className='w-full lg:w-[60%]'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            <div className='w-full lg:w-[40%] py-6 lg:py-9'>
                <button className='py-5 px-6 sm:px-10 lg:px-12 w-full bg-[#6047EC]/10 text-2xl font-bold text-[#6047EC] border border-[#6047EC] rounded-xl cursor-pointer'>
                    Spent time on read : 0 min
                </button>
                <div className='p-6 sm:p-8 bg-[#111111]/10 mt-6 rounded-lg'>
                    <h2 className='text-2xl font-bold'>Bookmarked Blogs : 8</h2>
                </div>
            </div>
        </div>
    );
};

export default Content;
