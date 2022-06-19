import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between py-8 px-4">
        <div className="text-3xl text-[#2FCC9D] font-semibold">moodventure</div>

        <div className="text-white font-semibold text-sm self-center">
          <a href="https://github.com/Ciggzy1312/moodventure" target='_blank' rel="noreferrer"><button className="bg-slate-800 px-2 py-1 rounded text-white">Star us on Github</button></a>
        </div>
      </div>

      <div className="px-4 py-6 mt-10">
        <div className=" py-4">
          <div className="text-6xl font-bold">
            <h1 className="font-bold">See how your <span className="text-[#2FCC9D] ">mood</span> changes<br></br> everyday and <span className="text-[#2FCC9D] ">track</span> them</h1>
          </div>
          <div className="my-4 font-semibold">
            <p className="text-gray-600 text-xl">But in new colors</p>
          </div>
        </div>

        <div className="my-4">
          <Link href="/api/auth/login"><button className="text-white bg-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5 mr-6">Get Started</button></Link>
          <button className="bg-white text-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5">Watch Demo</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage