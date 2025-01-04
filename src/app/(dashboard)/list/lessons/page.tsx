"use client"

import Image from "next/image"
import Link from "next/link"
import TableSearch from "@/app/components/TableSearch"
import Table from "@/app/components/Table"
import Pagination from "@/app/components/Pagination"
import { role, lessonsData } from "@/lib/data"

type Lesson = {
  id:number;
  subject:string;
  class:string;
  teacher: string;
 
}


const columns = [

  {
    header: "Subjects Name",
    accessor: "subjectsName",
    className: " lg:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: " lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];




const LessonListPage  = () => {


  const renderRow = (item:Lesson)=>(
    <tr key={item.id}>
    
       
             <td className=" lg:table-cell text-xs">{item.subject}</td>
                <td className=" hidden lg:table-cell text-xs text-gray-500">{item.class}</td>
          
    
       
       <td className=" lg:table-cell text-xs">{item.teacher}</td>
       
        <td>
          <div className="flex items-center gap-2">
             <Link href={`/list/lessons/${item.id}`}>
              <button className="p-2  h-12 w-12">
                   <Image src='/view.png'
                    alt="view"
                     width={48}
                     height={48}
                     className="rounded-full"
                     />
                </button>
             </Link>
             { role === "admin" && (<button className="p-2  h-12 w-12">
                   <Image src='/delete.png'
                    alt="view"
                     width={48}
                     height={48}
                     className="rounded-full"
                     />
                </button>)}
          </div>
            
        </td>
    </tr>
  );
  return (
    <div className='p-5 flex flex-col gap-5'>
       <div className="flex justify-between">
          <div>Parents List</div>
          <div className="flex justify-center gap-4">
          <div className=""><TableSearch/></div>
          <button className="
            bg-yellow p-2 rounded-full">
             <Image src="/sort.png"
               width={18}
               height={18}
               alt="filter"
               />
          </button>
          <button className="bg-purple p-2 rounded-full">
             <Image src="/filter.png"
               width={18}
               height={18}
               alt="filter"
               />
          </button>
          <button className="bg-green-300 p-2 rounded-full">
             <Image src="/plus.png"
               width={18}
               height={18}
               alt="filter"
               />
          </button>
          </div>


        
         
       </div>


       {/* Table */}

         <div>
            <Table columns={columns} renderRow={renderRow} data={lessonsData}/>
          </div>

        {/* Pagination */}

        <Pagination/>
    </div>
  )
}

export default LessonListPage;