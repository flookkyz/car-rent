import React from 'react'


function Footer() {
    return (
        <div className='w-[full] h-[30vh] grid grid-cols-1 divide-y px-[3vw]'>
            <div className='bg-white flex flex-row justify-between py-[3vw]'>
                <div className='flex flex-col'>
                    <p className='text-[36px] font-bold mb-[10px] text-blue-600'>CARRENT</p>
                    <p className='text-[18px] text-zinc-400'>Our vision is to provide convenience <br /> and help increase your sales business.</p></div>
                <div className='flex flex-row gap-[5vw] w-[30vw] justify-start text-zinc-400'>
                    <div>
                        <p className='font-bold text-black'>About</p>
                        <p>How it works</p>
                        <p>Featured</p>
                        <p>Partnership</p>
                        <p>Bussiness Relation</p>
                    </div>
                    <div>
                        <p className='font-bold text-black'>Community</p>
                        <p>Events</p>
                        <p>Blog</p>
                        <p>Podcast</p>
                        <p>invite a friend</p>
                    </div>
                    <div>
                        <p className='font-bold text-black'>Socials</p>
                        <p>Discord</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between py-[3vw] py-[1vw] font-bold'>
                <p>©2022 MORENT. All rights reserved</p>
                <div className='flex flex-row gap-[30px]'>
                    <p>privacy & Policy</p>
                    <p>Trems & Condition</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
