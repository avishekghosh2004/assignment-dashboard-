export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Log in to your account
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded focus:outline-accent"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded focus:outline-accent"
          />
          {/* Forgot password link */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline transition"
            >
              Reset password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white p-3 rounded bg-blue-600 cursor-pointer hover:bg-blue-700"
          >
            Login
          </button>
        </form>
    
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>
        {/* Continue with Gmail button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 p-3 rounded hover:bg-gray-50 transition font-medium cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
