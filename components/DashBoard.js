import { useUser } from '@auth0/nextjs-auth0';

const DashBoard = () => {

  const { user } = useUser();
  const { email, given_name } = user;

  return (
    <div className=''>
      <div className='flex justify-between py-8 px-4'>
        <div className='self-center  w-1/3'>
          <ul className='flex text-slate-700 justify-between font-semibold text-lg'>
            <li className='hover:text-[#2FCC9D]'>Home</li>
            <li className='hover:text-[#2FCC9D]'>Memories</li>
            <li className='hover:text-[#2FCC9D]'>Articles</li>
          </ul>
        </div>

        <div className=''>
          <button className=' text-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5 hover:bg-[#2FCC9D] hover:text-white'><a href="/api/auth/logout">Logout</a></button>
        </div>
      </div>

      <div className='px-4 py-6 my-10 text-center bg-gray-100 h-[200px]'>
        <div className='my-6'>
          <span className='text-4xl font-semibold'>Welcome {given_name}</span>
          <p className='text-lg text-slate-600 mt-2 font-semibold'>Tell us about your day</p>
        </div>

        <button className='text-white bg-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5'>Add mood</button>
      </div>

      <div className='px-4 py-6 my-10 text-center'>
        <div className='mb-4'>
          <span className='text-2xl font-bold'>Want to have a walk down the memory lane?</span>
          <p className='text-lg text-slate-600 mt-2 font-semibold'>Click below</p>
        </div>

        <button className='text-white bg-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5'>Stats</button>
      </div>
    </div>
  )
}

export default DashBoard