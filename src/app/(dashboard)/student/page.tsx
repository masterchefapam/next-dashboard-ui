import Announcements from "@/app/components/Announcements"
import BigCalendar from "@/app/components/BigCalendar"
import EventCalendar from "@/app/components/EventCalendar"

const Page = () => {
  return (
    <div className="p-5">
           <div className="flex justify-between w-full xl:w-2/3">
                <div>
                     <div className="font-bold text-lg  mb-5 tracking-wider">Schedule: 
                       <span className="text-sm font-bold text-orange-600"> (Chef Apam)</span></div>
                </div>
              
            </div>


           <div className="p-4 flex gap-4 flex-col lg:flex-row">
            

            {/* LEFT */}
             
         
                <div className="w-full xl:w-2/3 flex flex-col gap-5">
                    <BigCalendar/>
                
                     
                </div>

                    {/* RIGHT*/}
                
          <div className="w-full lg:w-1/3 flex flex-col gap-2 min-h-10">
              <div ><EventCalendar /></div>
              <div><Announcements/></div>      
        </div>
    </div>
    </div>
   
  )
}

export default Page