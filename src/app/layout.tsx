import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
    title: 'AkananuruX',
    description: 'Professional Profile & Development Services',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-black text-white min-h-screen font-mono">
                <Navbar />
                <AnimatePresence mode="wait">
                    <main className="pt-16 transition-all duration-300 relative z-0">
                        {children}
                    </main>
                </AnimatePresence>
            </body>
        </html>
    );
} 