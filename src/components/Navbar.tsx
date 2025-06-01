'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
    ];

    return (
        <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 glass rounded-xl ${scrolled ? 'border-b border-white/10' : 'border-b border-transparent'}
            }`}>
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <span className="sr-only">AkananuruX</span>
                            <Image
                                src="/assets/ax.png"
                                alt="AkananuruX Logo"
                                width={40}
                                height={40}
                                className="h-8 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-sm font-medium transition-colors duration-200 ${pathname === item.path
                                    ? 'text-primary'
                                    : 'text-white hover:text-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="glass-button px-4 py-2 text-sm font-medium"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 glass rounded-b-xl overflow-hidden">
                    <nav className="px-2 py-2 space-y-1 text-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`block rounded-lg px-3 py-2 text-base font-medium ${pathname === item.path
                                    ? 'bg-white/10 text-primary'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="glass-button block w-auto text-center px-3 py-2 text-base font-medium mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
} 