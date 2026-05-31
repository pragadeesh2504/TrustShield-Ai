import LiveAlerts from "../components/LiveAlerts";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  ShieldAlert,
  Activity,
  Globe,
  QrCode,
  Phone,
  Bell,
  TrendingUp,
  UserCheck,
  Siren,
  User,
  LogIn,
} from "lucide-react";

function Dashboard() {
  const alerts = [
    {
      type: "Phishing URL Blocked",
      risk: "High Risk",
    },
    {
      type: "Fake QR Detected",
      risk: "Medium Risk",
    },
    {
      type: "Scam Call Prevented",
      risk: "Critical",
    },
    {
      type: "Banking Screenshot Scam",
      risk: "High Risk",
    },
  ];

  return (
    <div className="min-h-screen text-white p-6 bg-[#020617]">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-6">

        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            TrustShield AI
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Banking Cybersecurity Monitoring Dashboard
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">

          {/* NOTIFICATION BUTTON */}

          <Link to="/notifications">

            <div className="bg-[#111827] border border-gray-700 px-5 py-3 rounded-2xl flex items-center gap-3 hover:border-yellow-400 transition cursor-pointer">

              <Bell className="text-yellow-400" />

              <div>
                <p className="text-sm text-gray-400">
                  Notifications
                </p>

                <h3 className="font-bold">
                  12 New Alerts
                </h3>
              </div>

            </div>

          </Link>

          {/* LOGIN BUTTON */}

          <Link to="/login">

            <div className="bg-[#111827] border border-gray-700 px-5 py-3 rounded-2xl flex items-center gap-3 hover:border-cyan-400 transition cursor-pointer">

              <LogIn className="text-cyan-400" />

              <div>
                <p className="text-sm text-gray-400">
                  Authentication
                </p>

                <h3 className="font-bold">
                  Login
                </h3>
              </div>

            </div>

          </Link>

          {/* REGISTER BUTTON */}

          <Link to="/register">

            <div className="bg-[#111827] border border-gray-700 px-5 py-3 rounded-2xl flex items-center gap-3 hover:border-purple-400 transition cursor-pointer">

              <User className="text-purple-400" />

              <div>
                <p className="text-sm text-gray-400">
                  New User
                </p>

                <h3 className="font-bold">
                  Register
                </h3>
              </div>

            </div>

          </Link>

          {/* SYSTEM STATUS */}

          <div className="bg-green-500/20 border border-green-500 px-5 py-3 rounded-2xl">
            <p className="text-green-400 font-bold">
              System Protected
            </p>
          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* CARD 1 */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:border-red-500 transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400">
                Threats Blocked
              </p>

              <h2 className="text-4xl font-bold mt-3">
                1,284
              </h2>

              <p className="text-red-400 text-sm mt-2">
                +18% this week
              </p>
            </div>

            <ShieldAlert
              size={45}
              className="text-red-400"
            />

          </div>

        </div>

        {/* CARD 2 */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:border-green-500 transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400">
                Safe Transactions
              </p>

              <h2 className="text-4xl font-bold mt-3">
                98.7%
              </h2>

              <p className="text-green-400 text-sm mt-2">
                Secure banking activity
              </p>
            </div>

            <ShieldCheck
              size={45}
              className="text-green-400"
            />

          </div>

        </div>

        {/* CARD 3 */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:border-purple-500 transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400">
                AI Accuracy
              </p>

              <h2 className="text-4xl font-bold mt-3">
                99.2%
              </h2>

              <p className="text-purple-400 text-sm mt-2">
                Real-time analysis
              </p>
            </div>

            <Activity
              size={45}
              className="text-purple-400"
            />

          </div>

        </div>

        {/* CARD 4 */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:border-blue-500 transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400">
                Protected Users
              </p>

              <h2 className="text-4xl font-bold mt-3">
                12K+
              </h2>

              <p className="text-blue-400 text-sm mt-2">
                Active globally
              </p>
            </div>

            <Globe
              size={45}
              className="text-blue-400"
            />

          </div>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

        {/* LIVE ALERTS */}

        <div className="xl:col-span-2 bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold">
              Live Threat Alerts
            </h2>

            <div className="bg-red-500/20 px-4 py-2 rounded-xl">
              <p className="text-red-400 text-sm">
                Live Monitoring
              </p>
            </div>

          </div>

          <div className="space-y-5">

            {alerts.map((alert, index) => (

              <div
                key={index}
                className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center justify-between hover:border-red-500 transition"
              >

                <div className="flex items-center gap-4">

                  <ShieldAlert className="text-red-400" />

                  <div>

                    <h3 className="font-bold text-lg">
                      {alert.type}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      AI detected suspicious activity
                    </p>

                  </div>

                </div>

                <div className="bg-red-500/20 px-4 py-2 rounded-xl">

                  <p className="text-red-400 text-sm">
                    {alert.risk}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* AI MODULES */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            AI Modules
          </h2>

          <div className="space-y-5">

            <Link to="/url-scanner">

              <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center gap-4 hover:border-purple-500 transition cursor-pointer">

                <Globe className="text-purple-400" />

                <div>

                  <h3 className="font-bold">
                    URL Scanner
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Phishing Detection
                  </p>

                </div>

              </div>

            </Link>

            <Link to="/qr-scanner">

              <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center gap-4 hover:border-purple-500 transition cursor-pointer">

                <QrCode className="text-purple-400" />

                <div>

                  <h3 className="font-bold">
                    QR Scanner
                  </h3>

                  <p className="text-gray-400 text-sm">
                    UPI Fraud Detection
                  </p>

                </div>

              </div>

            </Link>

            <Link to="/call-analyzer">

              <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center gap-4 hover:border-purple-500 transition cursor-pointer">

                <Phone className="text-purple-400" />

                <div>

                  <h3 className="font-bold">
                    Call Analyzer
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Voice Scam Detection
                  </p>

                </div>

              </div>

            </Link>

          </div>

        </div>

      </div>

      {/* ANALYTICS SECTION */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-cyan-400" />
            <h2 className="text-xl font-bold">
              Threat Growth
            </h2>
          </div>

          <h1 className="text-5xl font-bold text-cyan-400">
            +42%
          </h1>

          <p className="text-gray-400 mt-3">
            Increase in phishing attempts this month.
          </p>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="text-green-400" />
            <h2 className="text-xl font-bold">
              Verified Users
            </h2>
          </div>

          <h1 className="text-5xl font-bold text-green-400">
            8,924
          </h1>

          <p className="text-gray-400 mt-3">
            Users secured with AI protection.
          </p>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Siren className="text-red-400" />
            <h2 className="text-xl font-bold">
              Critical Alerts
            </h2>
          </div>

          <h1 className="text-5xl font-bold text-red-400">
            27
          </h1>

          <p className="text-gray-400 mt-3">
            Immediate actions required.
          </p>

        </div>

      </div>

      {/* AI INSIGHTS */}

      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold mb-8">
          AI Security Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400 mb-3">
              Most Common Threat
            </h3>

            <p className="text-gray-300">
              Fake Banking URLs
            </p>

          </div>

          <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400 mb-3">
              Highest Risk Source
            </h3>

            <p className="text-gray-300">
              SMS Phishing Attacks
            </p>

          </div>

          <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-6">

            <h3 className="text-xl font-bold text-purple-400 mb-3">
              AI Recommendation
            </h3>

            <p className="text-gray-300">
              Enable real-time fraud alerts
            </p>

          </div>

        </div>

      </div>

      {/* LIVE ALERT COMPONENT */}

      <LiveAlerts />

    </div>
  );
}

export default Dashboard;