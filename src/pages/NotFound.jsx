import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">

        {/* 404 */}
        <h1 className="text-[100px] sm:text-[140px] font-bold leading-none text-[#0c2d5a]">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          We're sorry, but the page you are looking for
          doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 bg-[#0c2d5a] hover:bg-blue-900 text-white font-medium px-7 py-3 rounded transition"
        >
          Return to Homepage
        </Link>

      </div>
    </div>
  );
}