import { ChevronLast, ChevronFirst} from "lucide-react"
import { createContext, useContext, useState } from "react"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

export const SidebarContext = createContext()

export default function Sidebar({ children }: any) {
    const [expanded, setExpanded] = useState(true)

    return (
        <aside className="h-screen">
            <nav className={`h-full flex flex-col bg-[#F2EBE3] rounded-tr-xl rounded-br-xl border-r ${expanded ? "w-52" : "w-16"}`}>
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src={logo}
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
                            }`}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-[#0D1713]"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    )
}

export function SidebarItem({ icon, text, active, alert, link }: any) {
    const { expanded }: any = useContext(SidebarContext)

    return (
        <Link to={link}>
            <li
                className={`
        relative flex items-center py-2 px-3 my-1
        font-bold rounded-md cursor-pointer
        transition-colors group
        ${active
                        ? "bg-[#d3ac6e] text-[#0D1713]"
                        : "hover:bg-indigo-50 text-[#0D1713]"
                    }
    `}
            >
                {icon}
                <span
                    className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                        }`}
                >
                    {text}
                </span>
                {alert && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
                            }`}
                    />
                )}

                {!expanded && (
                    <div
                        className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-[#d3ac6e] text-[#0D1713] text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                    >
                        {text}
                    </div>
                )}
            </li>
        </Link>
    )
}