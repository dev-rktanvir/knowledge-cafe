import React from 'react';
import userPhoto from '../../assets/user.jpg';

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8'>
                {/* Left Side */}
                <div>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Knowledge Cafe</h2>
                </div>
                {/* Right Side */}
                <div>
                    <img
                        className='w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] rounded-full object-cover'
                        src={userPhoto}
                        alt="User"
                    />
                </div>
            </div>
            <div className='px-8'>
                <hr />
            </div>
        </div>
    );
};

export default Navbar;
