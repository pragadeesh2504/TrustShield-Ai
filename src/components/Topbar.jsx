import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">
          AI-powered cybersecurity banking protection
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-[#1E293B] p-3 rounded-xl">
          <Search />
        </div>

        <div className="bg-[#1E293B] p-3 rounded-xl relative">
          <Bell />

          <div className="w-3 h-3 bg-red-500 rounded-full absolute top-2 right-2"></div>
        </div>

        <div className="flex items-center gap-3 bg-[#1E293B] px-4 py-2 rounded-xl">
          <img
            src="https://i.pravatar.cc/100"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <p className="font-semibold">Hello, User</p>
            <p className="text-sm text-gray-400">Protected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;