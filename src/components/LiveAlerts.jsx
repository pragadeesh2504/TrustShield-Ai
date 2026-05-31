import { useEffect, useState } from "react";

import {
  ShieldAlert,
  QrCode,
  Globe,
  Phone,
} from "lucide-react";

function LiveAlerts() {

  const alertsData = [
    {
      icon: <Globe className="text-red-400" />,
      title: "Phishing URL blocked",
      time: "2 sec ago",
    },
    {
      icon: <QrCode className="text-orange-400" />,
      title: "Fake QR payment detected",
      time: "5 sec ago",
    },
    {
      icon: <Phone className="text-purple-400" />,
      title: "Scam call identified",
      time: "8 sec ago",
    },
    {
      icon: <ShieldAlert className="text-blue-400" />,
      title: "Suspicious banking login",
      time: "12 sec ago",
    },
  ];

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setAlerts((prev) => [
        alertsData[index % alertsData.length],
        ...prev,
      ]);

      index++;

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 mt-10">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Real-time Threat Feed
        </h2>

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

          <span className="text-red-400 text-sm">
            LIVE
          </span>

        </div>

      </div>

      <div className="space-y-4">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="bg-[#0B1120] border border-gray-700 rounded-2xl p-4 flex items-center justify-between animate-pulse"
          >

            <div className="flex items-center gap-4">

              {alert.icon}

              <div>

                <h3 className="font-semibold">
                  {alert.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  AI Security Engine
                </p>

              </div>

            </div>

            <span className="text-gray-500 text-sm">
              {alert.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LiveAlerts;