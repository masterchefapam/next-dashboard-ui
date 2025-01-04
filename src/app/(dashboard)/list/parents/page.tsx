"use client"

import Image from "next/image"
import Link from "next/link"
import TableSearch from "@/app/components/TableSearch"
import Table from "@/app/components/Table"
import Pagination from "@/app/components/Pagination"
import { role, parentsData } from "@/lib/data"

type Parent = {
  id:number;
  students:string[];
  name:string;
  email?: string;
  photo: string;
  phone: string;
  address:string;
}


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Students Name",
    accessor: "studentsName",
    className: "hidden lg:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];




const ParentListPage  = () => {


  const renderRow = (item:Parent)=>(
    <tr key={item.id}>
        <td className="flex gap-4 p-4">
             <div className="flex flex-col flex-1 ">
                <h3 className="semi-bold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
        </td>
        <td className="hidden lg:table-cell text-xs">{item.students.join(",")}</td>
       <td className="hidden lg:table-cell text-xs">{item.phone}</td>
        <td className="hidden lg:table-cell text-xs">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
             <Link href={`/list/teachers/${item.id}`}>
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
            <Table columns={columns} renderRow={renderRow} data={parentsData}/>
          </div>

        {/* Pagination */}

        <Pagination/>
    </div>
  )
}

export default ParentListPage;