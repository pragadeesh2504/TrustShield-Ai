function StatsCard({ title, value, subtitle, icon, color }) {
  return (
    <div className="bg-[#131A2E] rounded-3xl p-6 border border-[#1E293B] hover:scale-105 transition-all duration-300">
      <div className={`mb-5 ${color}`}>
        {icon}
      </div>

      <h2 className="text-4xl font-bold">{value}</h2>

      <p className="text-gray-400 mt-3">{title}</p>

      <p className="text-sm mt-2 text-gray-500">{subtitle}</p>
    </div>
  );
}

export default StatsCard;