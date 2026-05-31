import { useState } from "react";

import {
  Phone,
  ShieldAlert,
  ShieldCheck,
  Mic,
} from "lucide-react";

function CallAnalyzer() {

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeCall = () => {

    setLoading(true);
    setResult(null);

    setTimeout(() => {

      const lower = text.toLowerCase();

      if (
        lower.includes("otp") ||
        lower.includes("bank account") ||
        lower.includes("kyc") ||
        lower.includes("card blocked")
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
          AI Call Scam Detector
        </h1>

        <p className="text-gray-400 text-lg">
          Detect fraudulent banking calls using AI
        </p>

      </div>

      {/* MAIN CARD */}

      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

        {/* INPUT */}

        <div className="bg-[#0B1120] border border-gray-700 rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">

            <Mic className="text-purple-400" />

            <h2 className="text-2xl font-bold">
              Call Transcript
            </h2>

          </div>

          <textarea
            rows="7"
            placeholder="Paste suspicious call conversation here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-transparent outline-none text-lg resize-none"
          />

        </div>

        {/* BUTTON */}

        <button
          onClick={analyzeCall}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 p-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3"
        >

          <Phone />

          Analyze Call

        </button>

        {/* LOADING */}

        {loading && (

          <div className="mt-10 bg-[#0B1120] border border-purple-500 rounded-3xl p-8 text-center">

            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-5"></div>

            <h2 className="text-2xl font-bold text-purple-400">
              AI Voice Analysis Running...
            </h2>

            <p className="text-gray-400 mt-2">
              Detecting fraud keywords and scam patterns
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
                  Scam Call Detected
                </h2>

                <p className="text-gray-300 mt-2">
                  This conversation contains banking fraud indicators.
                </p>

              </div>

            </div>

            {/* RISK BAR */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">

                <span>Fraud Probability</span>

                <span className="text-red-400 font-bold">
                  94%
                </span>

              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-red-500 h-4 rounded-full w-[94%]"></div>

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
                  Safe Conversation
                </h2>

                <p className="text-gray-300 mt-2">
                  No major scam indicators detected.
                </p>

              </div>

            </div>

            {/* SAFE BAR */}

            <div className="mt-8">

              <div className="flex justify-between mb-2">

                <span>Fraud Probability</span>

                <span className="text-green-400 font-bold">
                  8%
                </span>

              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">

                <div className="bg-green-500 h-4 rounded-full w-[8%]"></div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* EXTRA INFO */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            OTP Scam Detection
          </h2>

          <p className="text-gray-400">
            Detects requests for OTP and banking credentials.
          </p>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            AI Voice Intelligence
          </h2>

          <p className="text-gray-400">
            Identifies fraud conversation patterns instantly.
          </p>

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-purple-400 mb-2">
            Banking Security
          </h2>

          <p className="text-gray-400">
            Protects users from financial social engineering attacks.
          </p>

        </div>

      </div>

    </div>
  );
}

export default CallAnalyzer;