'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-blue-400">404</h1>
                <h2 className="text-2xl font-semibold text-gray-300">Page not found</h2>
                <p className="text-gray-400 max-w-md mx-auto">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
} 