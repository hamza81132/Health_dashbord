import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <div className="max-w-[1600px] w-full bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 shadow-lg">
      <Sidebar/>
      <Dashboard />
     
    </div>
  )
}

export default App


