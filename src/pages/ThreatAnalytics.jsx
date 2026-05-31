import {
  ShieldAlert,
  Globe,
  Activity,
  TrendingUp,
} from "lucide-react";

function ThreatAnalytics() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold">
            Threat Analytics
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            AI-Powered Banking Threat Intelligence
          </p>

        </div>

        <div className="bg-red-500/20 border border-red-500 px-5 py-3 rounded-2xl">

          <p className="text-red-400 font-bold">
            High Threat Activity
          </p>

        </div>

      </div>

      {/* TOP STATS */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Total Threats
              </p>

              <h2 className="text-4xl font-bold mt-3">
                3,842
              </h2>

            </div>

            <ShieldAlert
              size={45}
              className="text-red-400"
            />

          </div>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Blocked URLs
              </p>

              <h2 className="text-4xl font-bold mt-3">
                1,294
              </h2>

            </div>

            <Globe
              size={45}
              className="text-blue-400"
            />

          </div>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                AI Detection Rate
              </p>

              <h2 className="text-4xl font-bold mt-3">
                99.4%
              </h2>

            </div>

            <Activity
              size={45}
              className="text-purple-400"
            />

          </div>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Threat Growth
              </p>

              <h2 className="text-4xl font-bold mt-3">
                +28%
              </h2>

            </div>

            <TrendingUp
              size={45}
              className="text-green-400"
            />

          </div>

        </div>

      </div>

      {/* ANALYTICS GRID */}

      <div className="grid grid-cols-3 gap-6">

        {/* THREAT BREAKDOWN */}

        <div className="col-span-2 bg-[#111827] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Threat Breakdown
          </h2>

          <div className="space-y-6">

            {/* URL Threats */}

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-lg">
                  Phishing URLs
                </p>

                <p className="text-red-400">
                  78%
                </p>

              </div>

              <div className="w-full bg-[#0B1120] rounded-full h-4">

                <div className="bg-red-500 h-4 rounded-full w-[78%]"></div>

              </div>

            </div>

            {/* QR Threats */}

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-lg">
                  QR Fraud
                </p>

                <p className="text-yellow-400">
                  52%
                </p>

              </div>

              <div className="w-full bg-[#0B1120] rounded-full h-4">

                <div className="bg-yellow-500 h-4 rounded-full w-[52%]"></div>

              </div>

            </div>

            {/* Voice Scam */}

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-lg">
                  Voice Scam
                </p>

                <p className="text-purple-400">
                  63%
                </p>

              </div>

              <div className="w-full bg-[#0B1120] rounded-full h-4">

                <div className="bg-purple-500 h-4 rounded-full w-[63%]"></div>

              </div>

            </div>

            {/* Screenshot Scam */}

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-lg">
                  Screenshot Scam
                </p>

                <p className="text-blue-400">
                  46%
                </p>

              </div>

              <div className="w-full bg-[#0B1120] rounded-full h-4">

                <div className="bg-blue-500 h-4 rounded-full w-[46%]"></div>

              </div>

            </div>

          </div>

        </div>

        {/* AI INSIGHTS */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            AI Insights
          </h2>

          <div className="space-y-5">

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5">

              <h3 className="text-purple-400 font-bold mb-2">
                Most Targeted
              </h3>

              <p className="text-gray-300">
                Banking Login Pages
              </p>

            </div>

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5">

              <h3 className="text-red-400 font-bold mb-2">
                Critical Threat
              </h3>

              <p className="text-gray-300">
                AI Voice Impersonation
              </p>

            </div>

            <div className="bg-[#0B1120] border border-gray-700 rounded-2xl p-5">

              <h3 className="text-green-400 font-bold mb-2">
                Recommendation
              </h3>

              <p className="text-gray-300">
                Enable multi-factor verification
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ThreatAnalytics;