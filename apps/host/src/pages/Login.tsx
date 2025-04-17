const LoginPage = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button type="submit" className="w-full p-2 bg-indigo-600 text-white rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;
  