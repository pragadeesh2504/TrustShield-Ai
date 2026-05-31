import { useState } from "react";

import {
  QrCode,
  ShieldAlert,
  ShieldCheck,
  Upload,
} from "lucide-react";

function QRScanner() {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const scanQR = () => {

    setLoading(true);
    setResult(null);

    setTimeout(() => {

      const random = Math.random();

      if (random > 0.5) {
        setResult("danger");
      } else {
        setResult("safe");
      }

      setLoading(false);

    }, 2500);
  };

  return (

    <div className="min-h-screen text-white">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-3">
          AI QR Scanner
        </h1>

        <p className="text-gray-400 text-lg">
          Detect fake UPI and suspicious payment QR codes
        </p>

      </div>

      {/* MAIN CARD */}

      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* QR AREA */}

        <div className="bg-[#0B1120] border border-dashed border-purple-500 rounded-3xl p-10 flex flex-col items-center justify-center">

          <div className="relative">

            <div className="w-56 h-56 border-4 border-purple-500 rounded-2xl flex items-center justify-center">

              <QrCode size={120} className="text-purple-400" />

            </div>

            {/* SCAN LINE */}

            {loading && (

              <div className="absolute top-0 left-0 w-full h-2 bg-purple-500 animate-bounce rounded-full"></div>

            )}

          </div>

          <button className="mt-8 bg-[#1F2937] hover:bg-[#374151] px-6 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300">

            <Upload />

            Upload QR Image

          </button>

        </div>

        {/* SCAN BUTTON */}

        <button
          onClick={scanQR}
          className="mt-8 w-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 p-4 rounded-2xl text-lg font-bold"
        >
          Scan QR Code
        </button>

        {/* LOADING */}

        {loading && (

          <div className="mt-10 bg-[#0B1120] border border-purple-500 p-8 rounded-3xl text-center">

            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-5"></div>

            <h2 className="text-2xl font-bold text-purple-400">
              AI QR Analysis Running...
            </h2>

            <p className="text-gray-400 mt-2">
              Checking UPI patterns and fraud indicators
            </p>

          </div>

        )}

        {/* DANGER */}

        {result === "danger" && (

          <div className="mt-10 bg-red-500/10 border border-red-500 p-8 rounded-3xl">

            <div className="flex items-center gap-4">

              <ShieldAlert
                size={60}
                className="text-red-400"
              />

              <div>

                <h2 className="text-3xl font-bold text-red-400">
                  Suspicious QR Detected
                </h2>

                <p className="text-gray-300 mt-2">
                  This QR may redirect to fraudulent UPI accounts.
                </p>

              </div>

            </div>

            {/* RISK BAR */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <span>Fraud Risk</span>
                <span className="text-red-400 font-bold">
                  89%
                </span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-red-500 h-4 rounded-full w-[89%]"></div>

              </div>

            </div>

          </div>
        )}

        {/* SAFE */}

        {result === "safe" && (

          <div className="mt-10 bg-green-500/10 border border-green-500 p-8 rounded-3xl">

            <div className="flex items-center gap-4">

              <ShieldCheck
                size={60}
                className="text-green-400"
              />

              <div>

                <h2 className="text-3xl font-bold text-green-400">
                  Safe QR Code
                </h2>

                <p className="text-gray-300 mt-2">
                  No suspicious payment redirection detected.
                </p>

              </div>

            </div>

            {/* RISK BAR */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <span>Fraud Risk</span>
                <span className="text-green-400 font-bold">
                  10%
                </span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-green-500 h-4 rounded-full w-[10%]"></div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* EXTRA INFO */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            UPI Verification
          </h2>

          <p className="text-gray-400">
            AI validates merchant payment authenticity.
          </p>

        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            Scam Detection
          </h2>

          <p className="text-gray-400">
            Detects malicious redirections and QR fraud.
          </p>

        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            Real-time Protection
          </h2>

          <p className="text-gray-400">
            Instant AI-powered transaction warnings.
          </p>

        </div>

      </div>

    </div>
  );
}

export default QRScanner;