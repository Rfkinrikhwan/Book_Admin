import { Plus, Search } from "lucide-react"
import TableCom from "../Components/TableCom"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="rounded-tl-xl rounded-bl-xl w-full h-screen bg-white flex items-center flex-col p-12 overflow-auto">
        <div className="w-full flex justify-center items-center flex-col gap-4 text-[#0D1713] p-5 shadow-md rounded-xl border">
          <h1 className="text-4xl">Data Books</h1>
          <div className="flex justify-between items-center w-full h-10 p-1 mt-8">
            <div className="flex gap-5">
              <input type="text" placeholder="Type here" className="input input-sm border border-black w-96 bg-transparent h-10" />
              <button className="btn btn-sm btn-ghost border border-gray-300 h-10"><Search /></button>
            </div>
            <Link to={'/addbook'}>
              <button className="btn btn-ghost btn-sm bg-[#d3ac6e] text-[#0D1713] border-none border-gray-300 h-10 font-extrabold">Add Book <Plus /></button>
            </Link>
          </div>
          <TableCom />
        </div>
      </div>
    </>
  )
}

export default Home