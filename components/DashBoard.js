import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';

const DashBoard = () => {

  const { user } = useUser();
  const { email, given_name } = user;
  const [modalVisibility, setModalVisibility] = useState(false);


  const handleEdit = (e) => {
    setModalVisibility(!modalVisibility);
  }

  return (
    <div className=''>
      <div className='flex justify-between py-8 px-4'>
        <div className='self-center  w-1/3'>
          <ul className='flex text-slate-700 justify-between font-semibold text-lg'>
            <Link href="/"><li className='hover:text-[#2FCC9D]'>Home</li></Link>
            <Link href="/memories"><li className='hover:text-[#2FCC9D]'>Memories</li></Link>
            <li className='hover:text-[#2FCC9D]'>Articles</li>
          </ul>
        </div>

        <div className=''>
        <a href="/api/auth/logout" className='text-[#2FCC9D] hover:text-white'><button className=' border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5 hover:bg-[#2FCC9D]'>Logout</button></a>
        </div>
      </div>

      {modalVisibility ?
        <div className="bg-slate-200 text-center">
          <div className="bg-white w-5/6 m-auto my-10">
            <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} email={email}/>
          </div>
        </div> : <div className='px-4 py-10 my-10 text-center bg-gray-100'>
          <div className='my-6'>
            <span className='text-4xl font-semibold'>Welcome {given_name}</span>
            <p className='text-lg text-slate-600 mt-2 font-semibold'>Tell us about your day</p>
          </div>


          <button className='text-white bg-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5' onClick={handleEdit}>Add mood</button>
        </div>}

      <div className='px-4 py-6 my-10 text-center'>
        <div className='mb-4'>
          <span className='text-2xl font-bold'>Want to have a walk down the memory lane?</span>
          <p className='text-lg text-slate-600 mt-2 font-semibold'>Click below</p>
        </div>

        <Link href="/memories"><button className='text-white bg-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5'>Memories</button></Link>
      </div>
    </div>
  )
}

export default DashBoard