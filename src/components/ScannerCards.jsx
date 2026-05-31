function ScannerCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-[#131A2E] rounded-3xl p-6 border border-[#1E293B]">
        <h2 className="text-2xl font-bold mb-5">
          URL Scanner
        </h2>

        <input
          type="text"
          placeholder="Paste suspicious URL"
          className="w-full bg-[#0B1020] p-4 rounded-xl outline-none border border-[#1E293B]"
        />

        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl mt-5 font-semibold">
          Scan URL
        </button>

        <div className="bg-red-500/10 border border-red-500 mt-5 rounded-2xl p-4">
          <p className="text-red-400 font-semibold">
            Dangerous URL Detected
          </p>

          <p className="text-gray-300 mt-2 text-sm">
            This link may steal banking credentials.
          </p>
        </div>
      </div>

      <div className="bg-[#131A2E] rounded-3xl p-6 border border-[#1E293B]">
        <h2 className="text-2xl font-bold mb-5">
          QR Scanner
        </h2>

        <div className="bg-white rounded-2xl p-6 flex justify-center">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi-payment"
            className="rounded-xl"
          />
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500 mt-5 rounded-2xl p-4">
          <p className="text-yellow-400 font-semibold">
            Suspicious QR Detected
          </p>

          <p className="text-gray-300 mt-2 text-sm">
            QR belongs to unknown payment source.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScannerCards;