import { useRouteError, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    // If there's no specific error, redirect to home after a short delay
    if (!error) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [error, navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          {error?.status === 404 ? 'Page Not Found' : 'Redirecting...'}
        </h1>
        <p className="text-gray-600 mb-4">
          {error?.status === 404 
            ? "The page you're looking for doesn't exist or has been moved."
            : "You'll be redirected to the home page shortly."}
        </p>
        <Link 
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Home Now
        </Link>
      </div>
    </div>
  );
} 