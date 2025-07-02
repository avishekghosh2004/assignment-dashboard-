export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-lg shadow-2xl  w-full max-w-sm">
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
          <button
            type="submit"
            className="w-full bg-accent text-white p-3 rounded bg-blue-600 cursor-pointer hover:bg-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
