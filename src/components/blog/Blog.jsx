import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const { cover, author_img, author, posted_date, reading_time, title, hashtags } = blog;
    return (
        <div className='border-b py-6 sm:py-8 lg:py-9'>
            {/* Image */}
            <div>
                <img className='w-full rounded-lg' src={cover} alt="" />
            </div>

            {/* Top Content part */}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-6 sm:my-8'>
                {/* Left Part */}
                <div className='flex items-center gap-4 sm:gap-5'>
                    <img className='h-12 w-12 sm:h-[60px] sm:w-[60px] rounded-full object-cover' src={author_img} alt="" />
                    <div>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>{author}</h2>
                        <p className='text-sm sm:text-base font-semibold'>{posted_date}</p>
                    </div>
                </div>

                {/* Right Part */}
                <div className='flex items-center gap-2 sm:gap-4'>
                    <p className='text-base sm:text-lg md:text-xl font-medium'>{reading_time} min read</p>
                    <FaRegBookmark size={20} className="sm:w-6 sm:h-6" />
                </div>
            </div>

            {/* Heading */}
            <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{title}</h2>
            </div>

            {/* Tags */}
            <div className='flex flex-wrap gap-3 text-base sm:text-lg md:text-xl font-medium py-4'>
                {
                    hashtags.map(tag => <p key={tag}>#{tag}</p>)
                }
            </div>

            {/* Button */}
            <div>
                <button className='underline text-base sm:text-lg md:text-xl font-semibold text-[#6047EC]'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;
