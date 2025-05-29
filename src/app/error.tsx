'use client';

import React from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-blue-400">Something went wrong!</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    {error.message || 'An unexpected error occurred. Please try again.'}
                </p>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    );
} 