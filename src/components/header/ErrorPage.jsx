import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100 dark:from-zinc-900 dark:to-black px-6 py-12 transition-colors duration-300">
      <div className="max-w-xl w-full bg-white bg-opacity-90 dark:bg-zinc-800 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-red-600 drop-shadow-sm">
          {error.status}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {error.statusText}
        </p>
        {error?.data && (
          <p className="text-base text-gray-500 dark:text-gray-400 italic">
            {error.data}
          </p>
        )}
        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
