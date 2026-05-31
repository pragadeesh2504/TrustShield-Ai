import {
  Shield,
  Bell,
  Lock,
  Smartphone,
  Moon,
  Globe,
} from "lucide-react";

function Settings() {
  return (
    <div className="min-h-screen text-white">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Settings
        </h1>

        <p className="text-gray-400 mt-2 text-lg">
          Manage security preferences and AI protection
        </p>

      </div>

      {/* SETTINGS GRID */}

      <div className="grid grid-cols-2 gap-6">

        {/* SECURITY SETTINGS */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Shield className="text-purple-400" size={28} />

            <h2 className="text-2xl font-bold">
              Security
            </h2>

          </div>

          <div className="space-y-5">

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  Real-time Protection
                </h3>

                <p className="text-gray-400 text-sm">
                  Detect scams instantly
                </p>

              </div>

              <button className="bg-green-500 w-14 h-7 rounded-full"></button>

            </div>

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  AI Threat Monitoring
                </h3>

                <p className="text-gray-400 text-sm">
                  24/7 fraud analysis
                </p>

              </div>

              <button className="bg-green-500 w-14 h-7 rounded-full"></button>

            </div>

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  Auto Block Dangerous URLs
                </h3>

                <p className="text-gray-400 text-sm">
                  Prevent phishing attacks
                </p>

              </div>

              <button className="bg-green-500 w-14 h-7 rounded-full"></button>

            </div>

          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Bell className="text-purple-400" size={28} />

            <h2 className="text-2xl font-bold">
              Notifications
            </h2>

          </div>

          <div className="space-y-5">

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  Fraud Alerts
                </h3>

                <p className="text-gray-400 text-sm">
                  Receive instant notifications
                </p>

              </div>

              <button className="bg-green-500 w-14 h-7 rounded-full"></button>

            </div>

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5 flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  Weekly Security Reports
                </h3>

                <p className="text-gray-400 text-sm">
                  AI-generated reports
                </p>

              </div>

              <button className="bg-gray-600 w-14 h-7 rounded-full"></button>

            </div>

          </div>

        </div>

      </div>

      {/* ADVANCED */}

      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 mt-8">

        <div className="flex items-center gap-3 mb-6">

          <Lock className="text-purple-400" size={28} />

          <h2 className="text-2xl font-bold">
            Advanced Preferences
          </h2>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-6">

            <Smartphone
              className="text-purple-400 mb-4"
              size={32}
            />

            <h3 className="font-bold text-lg">
              Device Protection
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Secure mobile banking sessions
            </p>

          </div>

          <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-6">

            <Moon
              className="text-purple-400 mb-4"
              size={32}
            />

            <h3 className="font-bold text-lg">
              Dark Mode
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Professional dark cybersecurity UI
            </p>

          </div>

          <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-6">

            <Globe
              className="text-purple-400 mb-4"
              size={32}
            />

            <h3 className="font-bold text-lg">
              Global Protection
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Detect international scam threats
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;