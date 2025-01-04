"use client"

import Image from "next/image"
import Link from "next/link"
import TableSearch from "@/app/components/TableSearch"
import Table from "@/app/components/Table"
import Pagination from "@/app/components/Pagination"
import { role, teachersData } from "@/lib/data"

type Teacher = {
  id:number;
  teacherId:string;
  name:string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes:string[];
  address:string;
}


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden lg:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
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




const TeacherListPage  = () => {


  const renderRow = (item:Teacher)=>(
    <tr key={item.id}>
        <td className="flex gap-4 p-4">
           <Image src={item.photo} alt="photo" width={40}
              height={40} className="rounded-full
               md:hidden xl:block w-10 h-10 "/>

            <div className="flex flex-col flex-1 ">
                <h3 className="semi-bold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
        </td>
        <td className="hidden lg:table-cell text-xs">{item.teacherId}</td>
        <td className="hidden md:table-cell text-xs">{item.subjects.join(",")}</td>
        <td className="hidden md:table-cell text-xs">{item.classes.join(",")}</td>
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
          <div>Teachers List</div>
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
            <Table columns={columns} renderRow={renderRow} data={teachersData}/>
          </div>

        {/* Pagination */}

        <Pagination/>
    </div>
  )
}

export default TeacherListPage;