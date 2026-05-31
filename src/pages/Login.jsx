function Login() {
  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center text-white">

      <div className="bg-[#111827] p-10 rounded-3xl w-[400px] border border-gray-800">

        <h1 className="text-4xl font-bold mb-8 text-center">
          TrustShield AI
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-[#0B1120] border border-gray-700 mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-[#0B1120] border border-gray-700 mb-6"
        />

        <button className="w-full bg-purple-600 hover:bg-purple-700 transition p-4 rounded-xl font-bold">
          Secure Login
        </button>

      </div>

    </div>
  );
}

export default Login;