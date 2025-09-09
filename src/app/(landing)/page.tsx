import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-black-primary">Landing Page</h1>

      <div className="flex gap-5">
        <Link
          href="/signin"
          className="mt-6 px-6 py-3 bg-blue-primary text-white rounded-lg hover:bg-blue-500 transition"
        >
          Signin
        </Link>
        <Link
          href="/dashboard"
          className="mt-6 px-6 py-3 bg-blue-primary text-white rounded-lg hover:bg-blue-500 transition"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
