import {
  Bell,
  ShieldAlert,
} from "lucide-react";

function Notifications() {

  const notifications = [
    {
      title: "Phishing URL Blocked",
      time: "2 mins ago",
      risk: "High Risk",
    },
    {
      title: "QR Scam Detected",
      time: "10 mins ago",
      risk: "Medium Risk",
    },
    {
      title: "Voice Scam Alert",
      time: "20 mins ago",
      risk: "Critical",
    },
    {
      title: "Screenshot Fraud Attempt",
      time: "1 hour ago",
      risk: "High Risk",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8">

      {/* HEADER */}

      <div className="flex items-center gap-4 mb-10">

        <Bell size={45} className="text-purple-400" />

        <div>

          <h1 className="text-5xl font-bold">
            Notifications
          </h1>

          <p className="text-gray-400 mt-2">
            Real-Time Security Alerts
          </p>

        </div>

      </div>

      {/* NOTIFICATION LIST */}

      <div className="space-y-5">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="bg-[#111827] border border-gray-800 rounded-3xl p-6 flex items-center justify-between"
          >

            <div className="flex items-center gap-5">

              <ShieldAlert className="text-red-400" />

              <div>

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  {item.time}
                </p>

              </div>

            </div>

            <div className="bg-red-500/20 px-4 py-2 rounded-xl">

              <p className="text-red-400 text-sm">
                {item.risk}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Notifications;