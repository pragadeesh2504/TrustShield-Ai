function ActivityTable() {
  const activities = [
    {
      type: "URL",
      source: "https://bit.ly/free-gift-card",
      result: "Phishing Link Detected",
      risk: "High",
      time: "2 min ago",
    },
    {
      type: "QR",
      source: "UPI QR Payment",
      result: "Suspicious QR Found",
      risk: "Medium",
      time: "10 min ago",
    },
    {
      type: "Call",
      source: "Unknown Number",
      result: "Potential Scam Call",
      risk: "High",
      time: "30 min ago",
    },
    {
      type: "Screenshot",
      source: "Payment Image",
      result: "Fake Screenshot Detected",
      risk: "High",
      time: "1 hr ago",
    },
  ];

  return (
    <div className="bg-[#131A2E] rounded-3xl p-6 mt-8 border border-[#1E293B]">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 border-b border-[#1E293B]">
              <th className="pb-4">Type</th>
              <th className="pb-4">Input</th>
              <th className="pb-4">Result</th>
              <th className="pb-4">Risk</th>
              <th className="pb-4">Time</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#1E293B] text-gray-300"
              >
                <td className="py-5">{item.type}</td>
                <td>{item.source}</td>
                <td>{item.result}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    item.risk === "High"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {item.risk}
                  </span>
                </td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;