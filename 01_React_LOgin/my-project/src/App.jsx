import './App.css'
function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl text-white font-bold text-center mb-6">
            Login
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-gray-700 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg bg-gray-700 text-white outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
              Login
            </button>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
