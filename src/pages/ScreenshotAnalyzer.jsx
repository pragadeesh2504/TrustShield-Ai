import { useState } from "react";

import {
  Image,
  Upload,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

function ScreenshotAnalyzer() {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeScreenshot = () => {

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
          AI Screenshot Analyzer
        </h1>

        <p className="text-gray-400 text-lg">
          Detect scams hidden inside screenshots and banking images
        </p>

      </div>

      {/* MAIN CARD */}

      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

        {/* UPLOAD AREA */}

        <div className="bg-[#0B1120] border border-dashed border-purple-500 rounded-3xl p-12 flex flex-col items-center justify-center">

          <div className="w-40 h-40 rounded-3xl bg-[#111827] flex items-center justify-center border border-gray-700">

            <Image size={90} className="text-purple-400" />

          </div>

          <button className="mt-8 bg-[#1F2937] hover:bg-[#374151] transition-all duration-300 px-6 py-3 rounded-2xl flex items-center gap-3">

            <Upload />

            Upload Screenshot

          </button>

          <p className="text-gray-500 mt-4">
            PNG, JPG, JPEG supported
          </p>

        </div>

        {/* BUTTON */}

        <button
          onClick={analyzeScreenshot}
          className="mt-8 w-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 p-4 rounded-2xl text-lg font-bold"
        >
          Analyze Screenshot
        </button>

        {/* LOADING */}

        {loading && (

          <div className="mt-10 bg-[#0B1120] border border-purple-500 rounded-3xl p-8 text-center">

            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-5"></div>

            <h2 className="text-2xl font-bold text-purple-400">
              AI Image Analysis Running...
            </h2>

            <p className="text-gray-400 mt-2">
              Detecting phishing text and fake banking patterns
            </p>

          </div>

        )}

        {/* DANGER */}

        {result === "danger" && (

          <div className="mt-10 bg-red-500/10 border border-red-500 rounded-3xl p-8">

            <div className="flex items-center gap-4">

              <ShieldAlert
                size={60}
                className="text-red-400"
              />

              <div>

                <h2 className="text-3xl font-bold text-red-400">
                  Scam Screenshot Detected
                </h2>

                <p className="text-gray-300 mt-2">
                  Fake banking or phishing indicators identified.
                </p>

              </div>

            </div>

            {/* RISK BAR */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">

                <span>Threat Level</span>

                <span className="text-red-400 font-bold">
                  91%
                </span>

              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-red-500 h-4 rounded-full w-[91%]"></div>

              </div>

            </div>

          </div>
        )}

        {/* SAFE */}

        {result === "safe" && (

          <div className="mt-10 bg-green-500/10 border border-green-500 rounded-3xl p-8">

            <div className="flex items-center gap-4">

              <ShieldCheck
                size={60}
                className="text-green-400"
              />

              <div>

                <h2 className="text-3xl font-bold text-green-400">
                  Safe Screenshot
                </h2>

                <p className="text-gray-300 mt-2">
                  No suspicious banking fraud detected.
                </p>

              </div>

            </div>

            {/* SAFE BAR */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">

                <span>Threat Level</span>

                <span className="text-green-400 font-bold">
                  11%
                </span>

              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-green-500 h-4 rounded-full w-[11%]"></div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* FEATURES */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            OCR AI Detection
          </h2>

          <p className="text-gray-400">
            Extracts suspicious text from screenshots automatically.
          </p>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            Phishing Recognition
          </h2>

          <p className="text-gray-400">
            Identifies fake bank messages and scam alerts.
          </p>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            Banking Protection
          </h2>

          <p className="text-gray-400">
            Prevents users from trusting fraudulent screenshots.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ScreenshotAnalyzer;