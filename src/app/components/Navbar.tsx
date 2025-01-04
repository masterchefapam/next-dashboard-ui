import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex md:justify-between justify-end'>
        <div className='
         md:flex ring-1 ring-gray-400 rounded-lg hidden '>
            <Image src="/search.png"
              alt="search"
              width={20}
              height={20}
              className='w-5 h-5 pt-1 pl-1'
              />

              <input type="text" 
                placeholder='search here...'
                className='h-6 bg-transparent 
                  min-w-10 outline-none p-1
                  flex place-self-center'/>
        </div>
        <div className='flex justify-center gap-5 relative'>
           <Image src="/message.png"
            alt='announcement'
            width={28}
            height={28}
            className='h-7 w-7'
            />
             <Image src="/announcement.png"
            alt='announcement'
            width={28}
            height={28}
            className='h-7 w-7 '/>
            <div className='absolute
               -top-1 left-16 bg-indigo-800 rounded-full text-white
                flex justify-center items-center p-1 h-4 w-4 text-xs'>
             1
            </div>

          
           <div className='flex flex-col items-center gap-1'>
                   <span className='font-bold text-sm'>ShongKang</span>
                   <span className='text-xs'>Admin</span>
            </div>

<Image src="/avatar.png"
            alt='announcement'
            width={28}
            height={28}
            className='h-7 w-7 rounded-full'
           />

        </div>
    </div>
  )
}

export default Navbar