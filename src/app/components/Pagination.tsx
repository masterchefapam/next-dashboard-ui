"use client"

const Pagination = () => {
  return (
    <div className='flex justify-between '>
        <div>
            <button disabled className="
              bg-gray-300 p-2
               rounded-md text-sm
               disabled:opacity-50
               disabled:cursor-not-allowed">Prev</button>
        </div>
        <div className="flex items-center justify-between gap-5
           ">
            <span className="text-xs bg-pink-400 p-1">1</span>
            <span className="text-xs">2</span>
            <span className="text-xs">3</span>
            <span className="text-xs tracking-widest">...</span>
            <span className="text-xs">10</span>
        </div>
        <div>
        <button className="
              bg-gray-300 p-2
               rounded-md text-sm
               ">Next</button>
        </div>
    </div>
  )
}

export default Pagination