import { Library } from "lucide-react"
import { Outlet } from "react-router-dom"
import Sidebar, { SidebarItem } from "./Components/Sidebar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


function App() {
  const queryClient = new QueryClient;  
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex gap-2">
        <Sidebar>
          <SidebarItem icon={<Library size={30} />} text="Books" alert active  link={`/`}/>
        </Sidebar>
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}

export default App