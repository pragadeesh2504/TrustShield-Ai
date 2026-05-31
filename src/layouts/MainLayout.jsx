import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (

    <div className="flex min-h-screen bg-[#020817] text-white">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-6 overflow-y-auto">

        {children}

      </div>

    </div>

  );
}

export default MainLayout;