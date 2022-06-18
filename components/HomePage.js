
const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between py-8 px-4">
        <div className="text-3xl text-[#2FCC9D] font-semibold">moodventure</div>

        <div className="text-white font-semibold text-sm self-center">
          <button className="bg-slate-800 px-2 py-1 rounded">Star us on Github</button>
        </div>
      </div>

      <div className="px-4 py-6 mt-10">
        <div className=" py-4">
          <div className="text-6xl font-bold">
            <h1 className="">See how your <span className="text-[#2FCC9D] ">mood</span><br></br> changes everyday</h1>
          </div>
          <div className="my-4 font-semibold">
            <p className="text-gray-600 text-xl">But what if in new colors?</p>
          </div>
        </div>

        <div className="my-4">
          <button className="text-white bg-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5 mr-6"><a href="/api/auth/login">Get Started</a></button>
          <button className="bg-white text-[#2FCC9D] border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5">Watch Demo</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage