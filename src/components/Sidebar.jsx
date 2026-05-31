import {
  Shield,
  Link,
  QrCode,
  Phone,
  Image,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const menuStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-purple-600 transition duration-300";

  return (
    <div className="w-[260px] bg-[#0B1120] border-r border-gray-800 p-5">

      <div className="mb-10">

        <h1 className="text-3xl font-bold text-purple-400">
          TrustShield AI
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Banking Cybersecurity
        </p>

      </div>

      <div className="flex flex-col gap-3">

        <NavLink to="/" className={menuStyle}>
          <Shield size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/url-scanner"
          className={menuStyle}
        >
          <Link size={20} />
          URL Scanner
        </NavLink>

        <NavLink
          to="/qr-scanner"
          className={menuStyle}
        >
          <QrCode size={20} />
          QR Scanner
        </NavLink>

        <NavLink
          to="/call-analyzer"
          className={menuStyle}
        >
          <Phone size={20} />
          Call Analyzer
        </NavLink>

        <NavLink
          to="/screenshot-analyzer"
          className={menuStyle}
        >
          <Image size={20} />
          Screenshot Analyzer
        </NavLink>

        <NavLink
          to="/settings"
          className={menuStyle}
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;