"use client"

import Image from "next/image"
import Link from "next/link"
import TableSearch from "@/app/components/TableSearch"
import Table from "@/app/components/Table"
import Pagination from "@/app/components/Pagination"
import { classesData, role, studentsData, subjectsData } from "@/lib/data"


type Class = {
  id:number;
  name:string;
  capacity:number;
  grade:number;
  supervisor: string;

}

const columns = [
  

    {
        header: "Class Name",
        accessor: "name",
       
    },
    {
        header:"Class Capacity",
        accessor: "capacity",
        className: "hidden lg:table-cell",
    },
    {
        header:"Grade",
        accessor: "grade",
        className: "hidden lg:table-cell",
    },
    {
        header:"Supervisor",
        accessor: "supervisor",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action"
    }
]



const ClassListPage  = () => {


    const renderRow = (item:Class)=>(
      <tr key={item.id}>
          <td className="flex gap-4 p-4">
         
  
              <div className="flex flex-col flex-1 ">
                  <h3 className="semi-bold">{item.name}</h3>
               
              </div>
          </td>
          <td className="hidden lg:table-cell text-xs">{item.capacity}</td>
          <td className="hidden lg:table-cell text-xs">{item.grade}</td>
          <td className="hidden lg:table-cell text-xs">{item.supervisor}</td>
       
          <td>
            <div className="flex items-center gap-2">
               <Link href={`/list/subjects/${item.id}`}>
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
            <div>Classes List</div>
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
              <Table columns={columns} renderRow={renderRow} data={classesData}/>
            </div>
  
          {/* Pagination */}
  
          <Pagination/>
      </div>
    )
  }
  
  export default ClassListPage;