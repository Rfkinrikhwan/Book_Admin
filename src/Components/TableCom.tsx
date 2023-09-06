// import * as React from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo } from 'react'
import moment from 'moment'
import { getReq } from '../Hooks/MyHooks'
import { MoreVertical } from 'lucide-react'

type Books = {
  title: string,
  page: number,
  desc: string,
  author: string,
  price: number,
  created_at: Date
}

const columnHelper = createColumnHelper<Books>()

const columns = [
  columnHelper.accessor(row => row.title, {
    header: 'Title'
  }),
  columnHelper.accessor(row => row.page, {
    header: 'Pages',
  }),
  columnHelper.accessor(row => row.desc, {
    header: 'Description',
  }),
  columnHelper.accessor(row => row.author, {
    header: 'Author',
  }),
  columnHelper.accessor(row => row.price, {
    header: 'Price',
  }),
  columnHelper.accessor(row => row.created_at, {
    header: 'Created At',
    cell: info => moment(info.getValue()).format('LL')
  }),
  columnHelper.display({
    id: 'Actions',
    cell: () => <div className='cursor-pointer flex justify-center items-center'><MoreVertical /></div>
  })
]

function TableCom() {

  const {data, isSuccess} = getReq('http://localhost:3000/books');

  const datas = useMemo(() => data, [data])

  const table = useReactTable({
    data: datas,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isSuccess) {
    return (
      <div className="border w-full text-[#0D1713] rounded-md">
        <table className='table table-md'>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='text-[#0D1713] text-[15px]'>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.id}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className='text-[#0d17139d] text-[14px]'>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableCom;