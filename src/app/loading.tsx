import React from 'react';

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-white"></div>
        </div>
    );
} 