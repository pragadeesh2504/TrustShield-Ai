function MobilePreview() {
  return (
    <div className="bg-[#131A2E] rounded-[40px] p-6 border border-[#1E293B] w-[320px] h-[650px]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-purple-400">
          TrustShield AI
        </h2>

        <div className="w-10 h-10 rounded-full bg-[#1E293B]"></div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-28 h-28 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-green-500">
          <div className="text-5xl">✓</div>
        </div>

        <h2 className="text-3xl font-bold text-green-400 mt-8">
          You are Safe
        </h2>

        <p className="text-gray-400 mt-3 text-center">
          Real-time banking protection is active
        </p>
      </div>

      <div className="bg-[#0B1020] mt-10 p-5 rounded-2xl border border-[#1E293B]">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Real-time Protection</p>

          <div className="w-14 h-8 bg-green-500 rounded-full flex items-center px-1">
            <div className="w-6 h-6 bg-white rounded-full ml-auto"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button className="bg-[#1E293B] p-5 rounded-2xl hover:bg-purple-600 transition-all">
          Scan URL
        </button>

        <button className="bg-[#1E293B] p-5 rounded-2xl hover:bg-purple-600 transition-all">
          Scan QR
        </button>

        <button className="bg-[#1E293B] p-5 rounded-2xl hover:bg-purple-600 transition-all">
          Analyze Call
        </button>

        <button className="bg-[#1E293B] p-5 rounded-2xl hover:bg-purple-600 transition-all">
          Check Image
        </button>
      </div>
    </div>
  );
}

export default MobilePreview;