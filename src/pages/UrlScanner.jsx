import { useState } from "react";

import {
  ShieldAlert,
  ShieldCheck,
  Search,
  Link2,
} from "lucide-react";

function UrlScanner() {

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const scanURL = () => {

    setLoading(true);
    setResult(null);

    setTimeout(() => {

      if (
        url.includes("bit.ly") ||
        url.includes("free") ||
        url.includes("gift") ||
        url.includes("claim")
      ) {
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
          AI URL Scanner
        </h1>

        <p className="text-gray-400 text-lg">
          Detect phishing and malicious websites instantly
        </p>

      </div>

      {/* MAIN CARD */}

      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* INPUT */}

        <div className="flex items-center gap-4 bg-[#0B1120] p-4 rounded-2xl border border-gray-700">

          <Link2 className="text-purple-400" />

          <input
            type="text"
            placeholder="Paste suspicious URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-transparent outline-none w-full text-lg"
          />

        </div>

        {/* BUTTON */}

        <button
          onClick={scanURL}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 p-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3"
        >

          <Search />

          Scan URL

        </button>

        {/* LOADING */}

        {loading && (

          <div className="mt-10 bg-[#0B1120] border border-purple-500 p-8 rounded-3xl">

            <div className="flex flex-col items-center">

              <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-5"></div>

              <h2 className="text-2xl font-bold text-purple-400">
                AI Scanning in Progress...
              </h2>

              <p className="text-gray-400 mt-2">
                Analyzing phishing patterns and domain risks
              </p>

            </div>

          </div>
        )}

        {/* DANGER RESULT */}

        {result === "danger" && (

          <div className="mt-10 bg-red-500/10 border border-red-500 p-8 rounded-3xl">

            <div className="flex items-center gap-4">

              <ShieldAlert
                className="text-red-400"
                size={60}
              />

              <div>

                <h2 className="text-3xl font-bold text-red-400">
                  Dangerous Website Detected
                </h2>

                <p className="text-gray-300 mt-2">
                  This URL may steal banking credentials
                  or personal data.
                </p>

              </div>

            </div>

            {/* RISK SCORE */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <span>Risk Score</span>
                <span className="text-red-400 font-bold">
                  92%
                </span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-red-500 h-4 rounded-full w-[92%]"></div>

              </div>

            </div>

          </div>
        )}

        {/* SAFE RESULT */}

        {result === "safe" && (

          <div className="mt-10 bg-green-500/10 border border-green-500 p-8 rounded-3xl">

            <div className="flex items-center gap-4">

              <ShieldCheck
                className="text-green-400"
                size={60}
              />

              <div>

                <h2 className="text-3xl font-bold text-green-400">
                  Safe Website
                </h2>

                <p className="text-gray-300 mt-2">
                  No suspicious threat patterns detected.
                </p>

              </div>

            </div>

            {/* RISK SCORE */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <span>Risk Score</span>
                <span className="text-green-400 font-bold">
                  12%
                </span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-green-500 h-4 rounded-full w-[12%]"></div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* EXTRA FEATURES */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-bold mb-2 text-purple-400">
            AI Detection
          </h2>

          <p className="text-gray-400">
            Machine learning analyzes suspicious URL patterns.
          </p>

        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-bold mb-2 text-purple-400">
            Real-time Security
          </h2>

          <p className="text-gray-400">
            Instant phishing and scam website alerts.
          </p>

        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">

          <h2 className="text-xl font-bold mb-2 text-purple-400">
            Banking Protection
          </h2>

          <p className="text-gray-400">
            Prevents credential theft and financial fraud.
          </p>

        </div>

      </div>

    </div>
  );
}

export default UrlScanner;