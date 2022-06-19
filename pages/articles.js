import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import axios from 'axios';
import Link from 'next/link';

const Articles = ({ data }) => {
    console.log(data)

    return (
        <div>

            <div className='flex justify-between py-8 px-12'>
                <div className='self-center  w-1/3'>
                    <ul className='flex text-slate-700 justify-between font-semibold text-lg'>
                        <Link href="/"><li className='hover:text-[#2FCC9D]'>Home</li></Link>
                        <Link href="/memories"><li className='hover:text-[#2FCC9D]'>Memories</li></Link>
                        <li className='text-[#2FCC9D]'>Articles</li>
                    </ul>
                </div>

                <div className=''>
                    <Link href="/api/auth/logout" className='text-[#2FCC9D] hover:text-white'><button className=' border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5 hover:bg-[#2FCC9D]'>Logout</button></Link>
                </div>
            </div>

            <div className='text-4xl text-[#2FCC9D] font-bold border-b border-gray-200 py-6 mx-12'>Articles related to mental health</div>

            <div className='mx-12 my-6'>
                {data.map((d, i) => (
                    <a href={d.url} target='_blank' rel="noreferrer" key={i}>
                        <div className='w-5/6 bg-white px-4 py-8 border-2 border-[#2FCC9D] rounded my-4'>
                        <div className='text-xl font-bold text-slate-700 my-2'>{d.title}</div>
                        <div className='flex border-2 w-28 border-[#2FCC9D] rounded items-center mt-4'>
                            <div className='w-2 h-2 rounded-full bg-[#2FCC9D] mx-2'></div>
                            <span className='text-[#2FCC9D]'>{d.source}</span>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    withPageAuthRequired();

    const { data } = await axios.get('https://mental-health-info-api.p.rapidapi.com/news/thetimes', {
        headers: {
            'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        }
    })

    return {
        props: {
            data
        },
    };
}

export default Articles