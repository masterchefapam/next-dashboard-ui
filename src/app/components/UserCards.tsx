const UserCards = ({type}:{type:string}) => {
  return (
    <div className='odd:bg-yellow even:bg-purple
     w-full rounded-md min-h-36 p-2 
     '>
      
     
     <div className="flex flex-col -gap-1 ">
           <div className="justify-between flex">
               <div className="text-[10px] bg-gray-100 p-2
                 rounded-full w-20 h-6 flex items-center">12/22/2024</div>
                 <div className="text-xl text-white p-2
                 rounded-full w-20 tracking-widest">
                  ...
                 </div>
           </div>
           <div className="text-lg font-semibold pb-5">
            1234
           </div>
              <div className="capitalize">{type} </div> 
            </div>
         
    
        </div>
        
   
   
  )
}

export default UserCards